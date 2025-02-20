import React from 'react';
import '../styles/button.css'; 

const Button = ({ text, onClick, className = '', style = {} }) => {
  return (
    <button 
      className={`custom-button ${className}`} 
      style={style} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
