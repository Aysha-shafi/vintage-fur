import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import ServicesPage from './pages/ServicesPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar /> 
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
