import React, { useState, useEffect, forwardRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { throttle } from 'lodash';

/**
 * Komponen NavLink yang bisa digunakan kembali untuk tampilan link yang konsisten
 * @param {string} label - Teks yang ditampilkan pada link
 * @param {string} to - Tujuan URL atau hash link
 * @param {boolean} highlight - Apakah link ditampilkan sebagai tombol yang menonjol
 * @param {'route'|'scroll'} type - Jenis link (navigasi route atau scroll ke section)
 * @param {boolean} active - Apakah link sedang aktif
 * @param {function} onClick - Fungsi yang dijalankan saat link diklik
 */
const NavLink = ({ label, to, highlight, type, active, onClick }) => {
  // Kelas dasar untuk styling semua link
  let baseClass = 'transition font-medium block';

  // Styling kondisional berdasarkan jenis link dan state
  if (highlight) {
    baseClass += ' bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-red-700';
  } else if (type === 'route') {
    baseClass += active
      ? ' text-blue-600 hover:text-blue-700'
      : ' text-gray-700 hover:text-blue-600';
  } else if (type === 'scroll') {
    baseClass += active
      ? ' text-blue-600 hover:text-blue-700'
      : ' text-gray-700 hover:text-blue-600';
  }

  // Render link sebagai <Link> untuk navigasi atau <a> untuk scroll
  return type === 'route' ? (
    <Link to={to} onClick={onClick} className={baseClass}>
      {label}
    </Link>
  ) : (
    <a href={to} onClick={onClick} className={baseClass}>
      {label}
    </a>
  );
};

/**
 * Komponen Navbar utama
 * Menggunakan forwardRef untuk mengakses ref dari komponen parent
 */
const Navbar = forwardRef((props, ref) => {
  // State untuk mengontrol tampilan navbar
  const [isScrolled, setIsScrolled] = useState(false); // Apakah halaman di-scroll
  const [menuOpen, setMenuOpen] = useState(false); // State menu mobile (buka/tutup)
  const [activeSection, setActiveSection] = useState(''); // Section yang sedang aktif
  const location = useLocation(); // Hook untuk mendapatkan lokasi/rute saat ini
  const navigate = useNavigate(); // Hook untuk navigasi programmatic

  // Daftar link navbar
  const navLinks = [
    { label: 'Home', to: '/', type: 'route' },
    { label: 'About', to: '/about', type: 'route' },
    { label: 'Media', to: '#media', type: 'scroll' },
    { label: 'News', to: '/news', type: 'route' },
    { label: 'Join Us', to: '#join', highlight: true, type: 'scroll' },
  ];

  /**
   * Fungsi untuk scroll ke atas halaman
   * Menggunakan smooth scroll behavior
   */
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  /**
   * Handler klik logo
   * - Jika sudah di halaman home: scroll ke atas
   * - Jika di halaman lain: navigasi ke home lalu scroll ke atas
   */
  const handleLogoClick = useCallback((e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    } else {
      navigate('/', { state: { shouldScrollToTop: true } });
    }
    setMenuOpen(false); // Tutup menu mobile jika terbuka
  }, [location.pathname, navigate, scrollToTop]);

  /**
   * Handler klik link Home
   * - Jika sudah di home: scroll ke atas
   * - Jika di halaman lain: biarkan navigasi default bekerja
   */
  const handleHomeClick = useCallback((e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
    setMenuOpen(false); // Tutup menu mobile jika terbuka
  }, [location.pathname, scrollToTop]);

  /**
   * Effect untuk menangani scroll ke atas setelah navigasi
   * Dipicu ketika ada state shouldScrollToTop
   */
  useEffect(() => {
    if (location.state?.shouldScrollToTop) {
      scrollToTop();
      // Reset state untuk menghindari scroll yang tidak diinginkan
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, scrollToTop]);

  /**
   * Effect untuk mendeteksi scroll dan mengupdate:
   * - State isScrolled (untuk mengubah style navbar)
   * - Section yang sedang aktif (untuk highlight menu)
   */
  useEffect(() => {
    const handleScroll = () => {
      // Update state isScrolled berdasarkan posisi scroll
      setIsScrolled(window.scrollY > 10);

      // Hanya cek section aktif jika di halaman home
      if (location.pathname !== '/') return;

      const sections = ['home', 'about', 'media', 'news', 'join'];
      let current = '';

      // Cari section yang sedang terlihat di viewport
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    // Gunakan throttle untuk membatasi frekuensi pemanggilan handleScroll
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Panggil sekali di awal untuk set state awal

    // Cleanup: hapus event listener ketika komponen unmount
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [location]);

  /**
   * Fungsi untuk render setiap link navbar
   * Menangani logika klik dan styling aktif
   */
  const renderLink = (link) => {
    // Tentukan apakah link sedang aktif
    const isActive = link.type === 'route'
      ? location.pathname === link.to
      : activeSection === link.to.replace('#', '') && location.pathname === '/';

    // Handler klik untuk link
    const handleClick = (e) => {
      if (link.type === 'scroll') {
        // Untuk link scroll, cegah navigasi default
        e.preventDefault();
        const el = document.querySelector(link.to);
        if (el) {
          // Scroll ke section yang dituju dengan offset untuk navbar
          window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        }
      } else if (link.to === '/') {
        // Khusus link Home, gunakan handler khusus
        handleHomeClick(e);
      }
      setMenuOpen(false); // Tutup menu mobile setelah klik
    };

    return (
      <NavLink
        key={link.label}
        label={link.label}
        to={link.to}
        highlight={link.highlight}
        type={link.type}
        active={isActive}
        onClick={handleClick}
      />
    );
  };

  // Render komponen Navbar
  return (
    <header
      ref={ref}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      {/* Container utama navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dengan link ke home */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition"
          aria-label="Scroll to top"
          state={{ shouldScrollToTop: true }}
        >
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-blue-600">TechSpark</span>
        </Link>

        {/* Navigasi desktop (hidden di mobile) */}
        <nav className="space-x-6 hidden md:flex items-center">
          {navLinks.map(renderLink)}
        </nav>

        {/* Tombol toggle menu mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 space-y-4 z-40 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(renderLink)}
      </div>
    </header>
  );
});

export default Navbar;