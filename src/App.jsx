import React from 'react';
import './style.css';
import { Home } from './_root/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModelPage from './_root/pages/ModelPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:modelPath" element={<ModelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
