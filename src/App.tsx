import React from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Footer from './components/Footer';
import HeaderPart from './pages/HeaderPart';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <div>
      <HeaderPart />
      <Routes>
        <Route path="/bread" element={<Breadcrumbs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
