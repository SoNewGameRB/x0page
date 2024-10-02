import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';


function Hero() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(false); // 控制圖片是否顯示

  const imageRef = useRef(null);

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

  // 設置 IntersectionObserver 來監控圖片進入視窗
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setImageVisible(true); // 當圖片進入視窗時顯示
        }
      },
      { threshold: 0.5 } // 當圖片一半進入畫面時觸發
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  // 切換圖片的函數
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, x: '-100vw' }} // 卡片滑入效果
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 1 }}
    >
      <div className="hero-content">
        <h1>這是我嘗試的作品集</h1>
        <p>希望可以轉職到前端</p>
        {/* 顯示當前圖片，僅當 imageVisible 為 true 時顯示圖片 */}
        {images.length > 0 && (
          <div ref={imageRef} className="image-card">
            {imageVisible && (
              <motion.img
                src={images[currentImageIndex].urls.regular}
                alt={images[currentImageIndex].alt_description}
                className="image"
                whileHover={{ opacity: 0.5 }} // 滑鼠懸停時變暗
              />
            )}
          </div>
        )}
        {/* 點擊按鈕切換圖片 */}
        <button onClick={changeImage} className="change-image-btn">
          下一張圖片
        </button>
      </div>
    </motion.div>
  );
}

export default Hero;
