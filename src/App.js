import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import NewsPage from './pages/NewsPage';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPage from './pages/MainPage';  // Ganti path import

import Berita1 from "./pages/Berita1/Berita1";
import Berita2 from "./pages/Berita2/Berita2";
import Berita3 from "./pages/Berita3/Berita3";
import Berita4 from "./pages/Berita4/Berita4";
import Berita5 from "./pages/Berita5/Berita5"

function App() {
  const navbarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return (
    <>
      <Navbar ref={navbarRef} />
      <Routes>
        <Route path="/" element={<MainPage navHeight={navHeight} />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />

        <Route path="/berita1" element={<Berita1 />} />
        <Route path="/berita2" element={<Berita2 />} />
        <Route path="/berita3" element={<Berita3 />} />
        <Route path="/berita4" element={<Berita4 />} />
        <Route path="/berita5" element={<Berita5 />} />

      </Routes>
    </>
  );
}

export default App;
