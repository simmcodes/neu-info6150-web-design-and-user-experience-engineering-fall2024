import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import RegistrationPage from './pages/RegistrationPage';
import MakeupPage from './pages/MakeupPage';
import SkincarePage from './pages/SkincarePage';
import BeautyTipsPage from './pages/BeautyTipsPage';
import Footer from './components/Footer';
import './styles/skiplink.css';

function App() {
  const [activePage, setActivePage] = useState('home'); 

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      
       <a 
        href="#main" 
        className="skip-link" 
        onClick={(e) => {
          e.preventDefault(); 
          document.getElementById('main').focus(); 
        }}
      >
        Skip to main content
      </a>

      <Header />
      <Navbar onNavigate={handlePageChange} />

     
      <div id="main" className="content" tabIndex="-1">
        {activePage === 'home' && <Homepage onNavigate={handlePageChange} />}
        {activePage === 'about' && <Aboutpage />}
        {activePage === 'register' && <RegistrationPage />}
        {activePage === 'makeup' && <MakeupPage />}
        {activePage === 'skincare' && <SkincarePage />}
        {activePage === 'beautytips' && <BeautyTipsPage />}
      </div>

     
      <Footer />
    </div>
  );
}

export default App;
