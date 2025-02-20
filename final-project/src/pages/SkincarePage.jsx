import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import '../styles/skincare.css';
import articles from '../data/articles';

const SkincarePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ images: [], content: [] });

  const openModal = (images, content) => {
    if (images?.length && content?.length) {
      setModalContent({ images, content });
      setIsModalOpen(true);
    } else {
      console.error('Invalid modal data:', { images, content });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="skincare-page">
      <h1>Skincare Tips & Advice</h1>
      <p>Explore the best skincare routines, tips, and product reviews tailored to your needs.</p>
      
      <div className="articles">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Button 
              text="Read More" 
              onClick={() => openModal(article.images, article.content)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalContent.images}
        content={modalContent.content}
      />
    </div>
  );
};

export default SkincarePage;
