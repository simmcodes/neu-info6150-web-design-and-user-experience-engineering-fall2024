import React from 'react';
import '../styles/aboutpage.css'; 
import AboutmyPic from '../assets/AboutmyPic.jpg'; 
import Accordion from '../components/Accordion'; 

const AboutPage = () => {
  const faqItems = [
    {
      title: "Where are you based?",
      content: "I’m from Mumbai, India and lived there most of my life! In 2022 my husband and I relocated and moved across the country for a new adventure. We are currently in the beautiful California!"
    },
    {
      title: "What’s your skintone?",
      content: "I have medium-tan skin with golden tones. During my Mumbai days I would say I was around a MAC NC30. In California we cannot escape the sun and I am more tan around NC35 to NC40ish."
    },
    {
      title: "What kind of camera do you use? Who takes your photos?",
      content: "I’ve experimented with several different cameras over the years and also use my iPhone for some photographs. Most of the photos on this blog have been shot by me. My husband also helps out and takes photos during our travels. The cameras I’ve used include a Sony Cyber-Shot DSC-N1, Sony NEX-6L/B, Canon PowerShot G16 and Sony Alpha a7RII. I currently use the Sony a7R II with a FE 24-70mm f/2.8 GM Lens."
    },
    {
      title: "What are your favorite brands?",
      content: "I’m always discovering new lines and products, but three favorites are Charlotte Tilbury, Urban Decay, and Laneige."
    }
  ];

  return (
    <div className="about-page">
     
      <div className="about-header">
        <h1>About Me</h1>
        <img src= {AboutmyPic}alt="Simran Kota" />
        <p>Welcome to my beauty space! I’m Simran Kota, the creator behind All About Beauty. My website is dedicated to all things makeup and skincare, where I share my expertise and passion for beauty. After working as a makeup artist for over five years, I decided to combine my love for beauty with my background as an IT engineer to create this platform. Alongside my full-time career as a project manager, I spent weekends and free time honing my craft as a freelance makeup artist, which fueled my desire to share tips, tutorials, and insights with you. Whether you're looking for the best skincare routines or makeup inspiration, I’m excited to take you along on this journey!</p>
      </div>

      {/* FAQs Accordion */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion-container">
          {faqItems.map((item, index) => (
            <Accordion 
              key={index}
              title={item.title}
              content={item.content}
              isArrowAccordion={true} 
              isFaqAccordion={true}
              customClass="about-accordion" 
            />
          ))}
        </div>
      </div>

     
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>You can reach out to contact me via e-mail at <a href="mailto:simrankotaa@gmail.com">simrankotaa@gmail.com</a>, thanks for visiting!</p>
      </div>
    </div>
  );
};

export default AboutPage;
