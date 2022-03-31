import React, {FC} from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Footer from './components/Footer';
import HeaderPart from './components/HeaderPart';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Error from './components/Error';
import ForgotPassword from './pages/ForgotPassword';
import FAQ from './pages/FAQ';

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
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      
      <Routes>
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      {/* <Routes>
        <Route path="*" element={<Error />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
