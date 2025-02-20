import React, { useState } from 'react';
import '../styles/accordion.css';


const Accordion = ({ title, content, additionalContent, imageSrc, altText, isArrowAccordion, isFaqAccordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      className={`makeup-article ${isArrowAccordion || isFaqAccordion ? (isOpen ? 'open' : 'collapsed') : ''}`}
      onClick={(isArrowAccordion || isFaqAccordion) ? toggleAccordion : null} 
    >
     
      <h3>{title}</h3>

    
      {imageSrc && <img src={imageSrc} alt={altText} />}

     
      {isFaqAccordion && isOpen && <p>{content}</p>}

      
      {!isFaqAccordion && <p>{content}</p>}

     
      {isOpen && (
        <div className="additional-content">
        
          {Array.isArray(additionalContent)
            ? additionalContent.map((section, index) => (
                <div key={index} className="additional-section">
                  <h4>{section.title}</h4>
                  <p>{section.description}</p>
                  <p><strong>Tip:</strong> {section.tip}</p>
                </div>
              ))
            : additionalContent
          }
        </div>
      )}

  
      {(isArrowAccordion || isFaqAccordion) && (
        <span className="arrow">
          {isOpen ? '▲' : '▼'}
        </span>
      )}

    
      {!isArrowAccordion && !isFaqAccordion && (
        <button className="read-more" onClick={toggleAccordion}>
          {isOpen ? 'Show Less' : 'Read More'}
        </button>
      )}
    </article>
  );
};

export default Accordion;
