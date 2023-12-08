import React from 'react';
import { Home } from './_root/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './Components/common/Navbar';
import { Insights } from './_root/pages/Insights';
import { Models } from './_root/pages/Models';
const App = () => {
  return (
    <main className=" bg-zinc-500 ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:modelPath" element={<Insights />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
