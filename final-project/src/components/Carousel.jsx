import React, { useState } from 'react';
import '../styles/carousel.css'; 


const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">
        &lt;
      </button>
      <div className="carousel-slide">
        <img
          src={slides[currentSlide].imageSrc}
          alt={slides[currentSlide].altText}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-button next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
