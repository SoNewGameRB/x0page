import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; // 引入所需的圖標

function Contact() {
  return (
    <motion.div
      id="contact" // 確保最外層元素有 id 屬性
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
            <FaInstagram size={40} style={{ margin: '10px' }} />
          </a>
          {/* Facebook 連結 */}
          <a href="https://www.facebook.com/stupidboy.lin.33" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} style={{ margin: '10px' }} />
          </a>
          {/* Email 連結 */}
          <a href="mailto:stupidlin11@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={40} style={{ margin: '10px' }} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
