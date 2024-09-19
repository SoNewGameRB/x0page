import React from 'react';
import './App.css'; // 引入樣式
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero id="hero" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
