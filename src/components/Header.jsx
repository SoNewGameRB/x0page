import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="hero" smooth={true} duration={500}>首頁</Link></li>
          <li><Link to="about" smooth={true} duration={500}>關於</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>作品</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>聯絡</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
