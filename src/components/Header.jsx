import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; 

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      // 當滾動超過300px時，顯示浮動圖示，否則隱藏它
      if (offset > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setShowMobileNav(false);  // 當滾動回到頂部時自動隱藏導航列
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav); 
  };

  return (
    <>
      {/* 廣告區域 */}
      <div className="ad-banner">
        <div className="ad-content">
          <div className="ad-text">
            <h2>前端開發作品集</h2>
            <p>探索我的最新專案和技術技能</p>
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

      {scrolled && (
        <div className="floating-icon" onClick={toggleMobileNav}>
          <FaBars size={30} color="white" />
        </div>
      )}

      <div className={`floating-nav ${showMobileNav ? 'show' : ''}`}>
        <Link to="hero" smooth={true} duration={500} className="nav-item">首頁</Link>
        <Link to="about" smooth={true} duration={500} className="nav-item">關於</Link>
        <Link to="portfolio" smooth={true} duration={500} className="nav-item">作品</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-item">聯絡</Link>
      </div>
    </>
  );
}

export default Header;
