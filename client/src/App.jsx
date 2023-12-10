import React, { useEffect, useState } from 'react';
import { Home, Models, Insights, About } from './_root/pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './Components/common/Navbar';
import bgImage from '#/assets/bg.jpg';

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      if (isScrolling !== scrolling) {
        setScrolling(isScrolling);
        console.log('isScrolling :>> ', isScrolling);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <main
      className="bg-zinc-500 bg-cover bg-center  animate-fadeIn overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:slug" element={<Insights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
