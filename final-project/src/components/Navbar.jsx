import React, { useState, useRef } from 'react';
import '../styles/navbar.css'; 

function Navbar({ onNavigate }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
    if (menuOpen) setDropdownOpen(false); 
  };

 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleDropdown();
      e.preventDefault(); 
    }
    if (e.key === 'Escape') {
      setDropdownOpen(false); 
    }
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => { onNavigate('home'); setMenuOpen(false); }}>Home</button>
        </li>

        <li className="dropdown">
          <button 
            onClick={toggleDropdown} 
            onKeyDown={handleKeyDown} 
            tabIndex="0" 
          >
            Blogs
          </button>
          {dropdownOpen && (
            <ul ref={dropdownRef} className="dropdown-content" role="menu">
              <li>
                <button 
                  onClick={() => { onNavigate('makeup'); setMenuOpen(false); }} 
                  role="menuitem" 
                  tabIndex="0"
                >
                  Makeup
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('skincare'); setMenuOpen(false); }} 
                  role="menuitem" 
                  tabIndex="0"
                >
                  Skincare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('beautytips'); setMenuOpen(false); }} 
                  role="menuitem" 
                  tabIndex="0"
                >
                  Beauty Tips
                </button>
              </li>
            </ul>
          )}
        </li>

        <li>
          <button onClick={() => { onNavigate('about'); setMenuOpen(false); }}>About</button>
        </li>

        <li>
          <button onClick={() => { onNavigate('register'); setMenuOpen(false); }}>Register</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
