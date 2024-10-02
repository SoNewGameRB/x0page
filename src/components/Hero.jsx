import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0); // 进度条的状态
  const heroRef = useRef(null);

  // 监控 Hero 组件是否进入视区
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const heroHeight = heroElement.offsetHeight;

        // 当 Hero 底部进入视区 80% 时，结束读条
        const progress = Math.min(
          (windowHeight - rect.top) / (windowHeight + heroHeight * 0.5) * 100,
          100
        );

        // 设置滚动进度
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, x: '-100vw' }} // 卡片滑入效果
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 1 }}
      ref={heroRef}
    >
      {/* 进度条区域，显示人物图示 */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}>
          <motion.div
            className="progress-icon"
            initial={{ x: 0 }}
            animate={{ x: scrollProgress + '%' }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
          >
            {/* 使用一个大一点的人物的图示 */}
            🧑‍🚀 {/* 根据需求替换成任何你喜欢的图示 */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
