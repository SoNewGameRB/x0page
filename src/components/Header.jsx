import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { FaBars } from 'react-icons/fa'; // 使用 react-icons 的 FaBars 作為圓形圖示

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) { // 滾動超過廣告高度
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav); // 切換導航顯示
  };

  return (
    <>
      {/* 廣告區域 */}
      <div className="ad-banner">
        <div className="ad-content">
          <div className="ad-image">
            <img src="https://via.placeholder.com/150" alt="Ad" />
          </div>
          <div className="ad-text">
            <h2>他是廣告</h2>
          </div>
        </div>
      </div>

      {/* 在廣告區域下方顯示的水平導航列（非手機頁面） */}
      {!scrolled && (
        <nav className="desktop-nav">
          <Link to="hero" smooth={true} duration={500} className="nav-item">首頁</Link>
          <Link to="about" smooth={true} duration={500} className="nav-item">關於</Link>
          <Link to="portfolio" smooth={true} duration={500} className="nav-item">作品</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-item">聯絡</Link>
        </nav>
      )}

      {/* 滾動後右下角出現的圓形圖示 */}
      {scrolled && (
        <div className="floating-icon" onClick={toggleMobileNav}>
          <FaBars size={30} color="white" />
        </div>
      )}

      {/* 點擊後顯示的垂直導航列 */}
      {showMobileNav && (
        <div className="floating-nav">
          <Link to="hero" smooth={true} duration={500} className="nav-item">首頁</Link>
          <Link to="about" smooth={true} duration={500} className="nav-item">關於</Link>
          <Link to="portfolio" smooth={true} duration={500} className="nav-item">作品</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-item">聯絡</Link>
        </div>
      )}
    </>
  );
}

export default Header;
