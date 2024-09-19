import React from 'react'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Portfolio() {
    // 示例項目數據，可以替換成實際項目數據
    const projects = [
      {
        title: '猜字遊戲',
        description: 'This is my first project.',
        image: 'https://github.com/SoNewGameRB/react-vite-game/blob/gh-pages/images/%E7%8C%9C%E5%AD%97%E9%81%8A%E6%88%B2.png?raw=true/600x400',
        link: 'https://sonewgamerb.github.io/react-vite-game/'
      },
      {
        title: '貪吃蛇',
        description: 'This is my second project.',
        image: 'https://github.com/SoNewGameRB/snake-game/blob/main/public/images/%E8%B2%AA%E5%90%83%E8%9B%87.png?raw=true/600x400',
        link: 'https://sonewgamerb.github.io/snake-game/'
      },
      {
        title: 'Project 3',
        description: 'This is my third project.',
        image: 'https://via.placeholder.com/600x400',
        link: 'https://github.com/your-repo/project3'
      },
      // 可以繼續添加更多項目
    ];
  
    // Slick Carousel 設置
    const settings = {
      dots: true, // 顯示導航點
      infinite: true, // 無限循環
      speed: 500, // 切換速度
      slidesToShow: 1, // 一次顯示一張幻燈片
      slidesToScroll: 1, // 一次滾動一張幻燈片
      autoplay: true, // 自動播放
      autoplaySpeed: 3000, // 自動播放間隔時間 (3秒)
      arrows: true, // 顯示箭頭導航
    };
  
    return (
      <motion.div
        id="portfolio"
        className="portfolio-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
       
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                  前往
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    );
  }
  
  export default Portfolio;