import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import NewsPage from './pages/NewsPage';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPage from './pages/MainPage';  // Ganti path import

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
      </Routes>
    </>
  );
}

export default App;
