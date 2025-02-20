import React from 'react';
import '../styles/beautytips.css'; 
import Accordion from '../components/Accordion'; 
import beautytipsContent from '../data/beautytipsContent'; 

const BeautyTipsPage = () => {
  return (
    <div className="beauty-tips-page">
      <h1>Beauty Tips & Tricks</h1>
      <p>Enhance your beauty routine with expert tips, quick hacks, and DIY recipes.</p>

      <div className="accordion-list">
        {beautytipsContent.map((article, index) => (
          <Accordion
            key={index}
            title={article.title}
            content={article.content}
            isArrowAccordion={true}
            additionalContent={article.additionalContent}
          />
        ))}
      </div>
    </div>
  );
};

export default BeautyTipsPage;
