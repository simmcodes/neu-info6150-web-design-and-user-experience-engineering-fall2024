import React from 'react';
import '../styles/header.css'; 
import Logo from '../assets/logo.jpg'

function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo-link"> 
        <img
          src={Logo}
          className="header-logo"
          alt="Blog Logo"
        />
      </a>
      <h1 className="header-title">
        ALL ABOUT BEAUTY
      </h1>
    </header> 
  );
}

export default Header;

