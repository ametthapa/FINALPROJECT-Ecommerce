import React, {FC} from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Footer from './components/Footer';
import HeaderPart from './pages/HeaderPart';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const App:FC =()=> {
  return (
    <div>
      <HeaderPart />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
