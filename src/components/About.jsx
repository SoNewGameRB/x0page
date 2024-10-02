import React from "react";
import { motion } from "framer-motion";


function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-section"
    >
      <div className="about-container">
        {/* 左側圖片與標題並排 */}
        <div className="about-header">
          <img
            src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-1/395298393_847480993518799_4323246223564566172_n.jpg?stp=c301.0.1080.1080a_dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=spOKvm7O_DgQ7kNvgFJnmY_&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=A584NBBVhruaIMs080wb0SQ&oh=00_AYAyiEqdO1uaMDn8M3KuYZm_nNiWMHkV40WmnaFj4xMHxg&oe=670397DD"
            alt="Profile"
            className="profile-image"
          />
          <h1 className="about-title">關於我</h1>
        </div>

        {/* 介紹文字區塊 */}
        <div className="about-text">
          <p>
            大家好！我是一名正在轉職成為前端工程師的學習者，目前正全力投入到這一領域的探索中。
          </p>
          <p>
            過去我在不同的領域積累了豐富的經驗，這些經歷讓我養成了良好的學習習慣和解決問題的能力。
          </p>
          <p>
            在轉職的過程中，我掌握了HTML、CSS和JavaScript等前端技術，並且不斷學習最新的前端框架如React和Vue。
          </p>
          <p>
            對於用戶體驗設計和網頁性能優化，我也有著濃厚的興趣。希望能夠在未來的工作中，將技術與創意結合，創建出兼具美觀和功能性的網頁應用。
          </p>
          <p>
            我熱愛挑戰，樂於學習新知識，相信通過不懈的努力，能夠在前端開發這條路上實現自我價值！期待與更多志同道合的朋友們交流與合作，一起成長！
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
