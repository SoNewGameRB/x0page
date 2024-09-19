import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Hero() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 獲取圖片數據的函數
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/?client_id=JrCKpdzbt3hEt6v5EOulpNwRbtXtLIWg2hQoogMyNDQ'
        );
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // 切換圖片的函數
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
    id="hero" // 確保最外層元素有 id 屬性
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="Hero">
        <h1>這是我嘗試的作品集</h1>
        <p>希望可以轉職到前端</p>
        {/* 顯示當前圖片 */}
        {images.length > 0 && (
          <div className="image-container">
            <img
              src={images[currentImageIndex].urls.regular}
              alt={images[currentImageIndex].alt_description}
              style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
            />
          </div>
        )}
        {/* 點擊按鈕切換圖片 */}
        <button onClick={changeImage} style={{ marginTop: '20px' }}>
          下一張圖片
        </button>
      </div>
    </motion.div>
  );
}

export default Hero;
