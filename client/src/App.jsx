import React from 'react';
import { Home, Models, Insights } from './_root/pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './Components/common/Navbar';
import bgImage from '#/assets/bg.jpg';

const App = () => {
  return (
    <main
      className="bg-zinc-500 bg-cover bg-center  animate-fadeIn"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:slug" element={<Insights />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
