import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Beauty Blog. All Rights Reserved.</p>
      <p>Empowering you with expert beauty tips, makeup trends, and skincare advice.</p>
      
      <div className="social-links">
        <a href="https://www.instagram.com/simrankotaa/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        <a href="https://www.facebook.com/people/Simran-Kota/pfbid0UPPYWKKdE979YPtoY5YSgTudHQRe8dRyvUUAR1dUPVhBzobSE8NHBf8FHBf53uBil/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        <a href="mailto:simrankotaa@gmail.com" className="social-link">Gmail</a>
      </div>
    </footer>
  );
};

export default Footer;
