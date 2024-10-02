import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; // 引入所需的圖標


function Contact() {
  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-content">
        <h1>聯絡我</h1>
        <p>以下是我的社交媒體連結，歡迎聯絡我！</p>
        <div className="social-links">
          {/* IG 連結 */}
          <a href="https://www.instagram.com/stupid_1011" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          {/* Facebook 連結 */}
          <a href="https://www.facebook.com/stupidboy.lin.33" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          {/* Email 連結 */}
          <a href="mailto:stupidlin11@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
