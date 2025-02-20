import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose, images = [], content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  if (!isOpen) return null;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!content[currentIndex]) {
    return null;
  }

  const {
    title = 'Untitled',
    paragraph1 = '',
    paragraph2 = '',
    paragraph3 = '',
    paragraph4 = '',
  } = content[currentIndex];

  return (
    <dialog className="modal-overlay" open>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="carousel">
          <button className="prev-btn" onClick={goToPrev}>←</button>
          <img src={images[currentIndex]} alt="carousel" className="carousel-img" />
          <button className="next-btn" onClick={goToNext}>→</button>
        </div>
        
        <div className="carousel-content">
          <h2>{title}</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
