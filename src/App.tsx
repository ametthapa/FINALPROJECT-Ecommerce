import React, {FC} from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Footer from './components/Footer';
import HeaderPart from './pages/HeaderPart';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';

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
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
