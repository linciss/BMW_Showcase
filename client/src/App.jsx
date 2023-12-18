import React from 'react';
import { Home, Models, Insights, About } from './_root/pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './Components/common/Navbar';

const App = () => {
  window.scrollTo(0, 0);

  return (
    <main className="bg-white bg-cover bg-center animate-fadeIn w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models/:series" element={<Models />} />
          <Route path="/models/:series/:slug" element={<Insights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
