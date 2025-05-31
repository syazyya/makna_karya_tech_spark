import React, { useState, useEffect, forwardRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { throttle } from 'lodash';
import logo from '../../assets/logo3.png';

/**
 * Komponen NavLink yang bisa digunakan ulang untuk tampilan konsisten
 * @param {string} label - Teks yang ditampilkan
 * @param {string} to - Tujuan URL atau hash
 * @param {boolean} highlight - Jika true, tampilkan sebagai tombol highlight
 * @param {'route'|'scroll'} type - Jenis navigasi (route atau scroll)
 * @param {boolean} active - Status aktif/non-aktif link
 * @param {function} onClick - Fungsi ketika diklik
 */
const NavLink = ({ label, to, highlight, type, active, onClick }) => {
  // Kelas dasar untuk semua link
  let baseClass = 'transition font-medium block';

  // Tambahkan kelas sesuai kondisi
  if (highlight) {
    baseClass += ' bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700';
  } else if (type === 'route') {
    baseClass += active
      ? ' text-blue-600 hover:text-blue-700'
      : ' text-gray-700 hover:text-blue-600';
  } else if (type === 'scroll') {
    baseClass += active
      ? ' text-blue-600 hover:text-blue-700'
      : ' text-gray-700 hover:text-blue-600';
  }

  // Render sebagai Link untuk navigasi atau tag <a> untuk scroll
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
 * Komponen Navbar utama dengan fitur:
 * - Responsive (mobile & desktop)
 * - Scroll-aware navigation
 * - Auto-hide on scroll
 */
const Navbar = forwardRef((props, ref) => {
  // State management
  const [isScrolled, setIsScrolled] = useState(false); // Untuk efek scroll navbar
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu mobile
  const [activeSection, setActiveSection] = useState(''); // Section yang aktif
  const location = useLocation(); // Lokasi saat ini
  const navigate = useNavigate(); // Fungsi navigasi

  // Daftar link navigasi
  const navLinks = [
    { label: 'Home', to: '/', type: 'route' },
    { label: 'About', to: '/about', type: 'route' },
    { label: 'Media', to: '#media', type: 'scroll' },
    { label: 'News', to: '/news', type: 'route' },
    { label: 'Join Us', to: '#join', highlight: true, type: 'scroll' },
  ];

  /**
   * Scroll ke atas halaman dengan efek smooth
   */
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  /**
   * Handle ketika logo diklik
   * - Jika sudah di home, scroll ke atas
   * - Jika di halaman lain, navigasi ke home
   */
  const handleLogoClick = useCallback((e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
    setMenuOpen(false); // Tutup menu mobile
  }, [location.pathname, scrollToTop]);

  /**
   * Handle ketika link Home diklik
   */
  const handleHomeClick = useCallback((e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
    setMenuOpen(false);
  }, [location.pathname, scrollToTop]);

  /**
   * Handle navigasi ke section tertentu
   * @param {string} target - ID section tujuan (tanpa #)
   */
  const handleScrollClick = useCallback((target) => {
    // Jika tidak di home, navigasi ke home dulu dengan state scrollTo
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      // Jika sudah di home, langsung scroll ke section
      const element = document.getElementById(target);
      if (element) {
        // Scroll dengan offset untuk navbar fixed
        window.scrollTo({
          top: element.offsetTop - 70, // 70px = tinggi navbar
          behavior: 'smooth'
        });
      }
    }
    setMenuOpen(false); // Tutup menu mobile
  }, [location.pathname, navigate]);

  /**
   * Effect untuk handle scroll event
   * - Update state isScrolled
   * - Deteksi section yang aktif
   */
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Cek jika halaman di-scroll > 10px
      setIsScrolled(window.scrollY > 10);

      // Hanya deteksi section jika di home page
      if (location.pathname !== '/') return;

      const sections = ['home', 'media', 'join'];
      let current = '';

      // Cari section yang sedang visible di viewport
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section dianggap aktif jika berada di tengah viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    }, 100); // Throttle 100ms untuk performa

    // Pasang event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil sekali di awal

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  /**
   * Fungsi untuk render setiap link navigasi
   * @param {object} link - Konfigurasi link
   */
  const renderLink = (link) => {
    // Tentukan apakah link aktif
    const isActive = link.type === 'route'
      ? location.pathname === link.to // Aktif jika route match
      : activeSection === link.to.replace('#', '') && location.pathname === '/'; // Aktif jika section visible

    // Handler ketika link diklik
    const handleClick = (e) => {
      if (link.type === 'scroll') {
        e.preventDefault();
        handleScrollClick(link.to.replace('#', ''));
      } else if (link.to === '/') {
        handleHomeClick(e);
      }
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

  return (
    <header
      ref={ref}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // Efek ketika di-scroll
        isScrolled ? 'bg-white shadow' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      {/* Container utama navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dengan link ke home */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition"
          aria-label="Home"
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

      {/* Menu mobile (toggle dengan state menuOpen) */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 space-y-4 transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(renderLink)}
      </div>
    </header>
  );
});

export default Navbar;