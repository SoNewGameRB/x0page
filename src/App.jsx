import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 移除自定義樣式
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Container, Row, Col } from 'react-bootstrap'; // 引入 Bootstrap 組件
import './App.css'; // 引入 App.css 檔案
function App() {
  return (
    <div className="App">
      <Header />
      <Container className="">
        {/* Hero 區塊 */}
        <Row className="">
          <Hero />
        </Row>
        {/* About 區塊 */}
        <Row className="">
          <About />
          <Portfolio />
        </Row>
        {/* Contact 區塊 */}
        <Row className="">
          <Contact />
        </Row>
      </Container>
    </div>
  );
}

export default App;
