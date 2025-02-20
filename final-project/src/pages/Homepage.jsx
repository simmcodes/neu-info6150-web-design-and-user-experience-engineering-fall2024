import React from 'react';
import '../styles/homepage.css'; 
import HomeMakeup from '../assets/HomeMakeup.jpg';
import HomeSkincare from '../assets/HomeSkincare.jpg';
import HomeBeautyTips from '../assets/HomeBeautyTips.jpg';



const HomePage = ({ onNavigate }) => {
  return (
    <div className="homepage">
      <div id="main" className="main-content" tabIndex="-1"></div>
  <div className="card makeup-card">
    <img src={HomeMakeup} alt="Applying a bronze eyeshadow on eyelid" />
    <div className="card-content">
      <h2>Makeup</h2>
     <p>Makeup is more than just a tool for enhancing beauty; it’s an empowering form of self-expression. It allows individuals to experiment with colors, textures, and techniques to create a look that reflects their personality and mood. From a simple everyday routine to bold, artistic statements, makeup has the power to transform how we feel and how we’re perceived. It can enhance natural features, camouflage imperfections, and highlight unique traits. With the right products and techniques, makeup boosts confidence, gives a sense of artistry, and allows everyone to feel their most beautiful, inside and out. Whether you're a beginner or a seasoned makeup enthusiast, there's always something new to discover in the world of beauty.</p>
      <div className="card-links">
      <span onClick={() => onNavigate('makeup')}>Tips</span>  | 
            <span onClick={() => onNavigate('makeup')}>Makeup Favorites</span>  | 
            <span onClick={() => onNavigate('makeup')}>Product Swatches</span>
          </div>
      <button className="learn-more-btn" onClick={() => onNavigate('makeup')}>Learn More</button>
    </div>
  </div>

      
  <div className="card skincare-card">
    <img src={HomeSkincare} alt="A woman applying a mud mask on face" />
    <div className="card-content">
      <h2>Skincare</h2>
      <p>Skincare is an essential part of maintaining healthy, radiant skin. A good skincare routine goes beyond just beauty—it’s about caring for your skin and nourishing it with the right products. From cleansing and exfoliating to moisturizing and protecting with sunscreen, each step plays a key role in maintaining skin health. Consistent skincare helps to balance the skin’s natural oils, prevent premature aging, and address specific concerns like acne, dryness, or sensitivity. With the right regimen tailored to your skin type, skincare helps you feel confident in your skin, ensuring it stays smooth, hydrated, and glowing. Healthy skin is not just about the products you use, but also how you take care of yourself from the inside out, embracing a balanced lifestyle for a clear complexion.</p>
      <div className="card-links">
      <span onClick={() => onNavigate('skincare')}>Tips</span>  | 
            <span onClick={() => onNavigate('skincare')}>Skincare Favorites</span>  | 
            <span onClick={() => onNavigate('skincare')}>DIY Masks</span>
          </div>
      <button className="learn-more-btn" onClick={() => onNavigate('skincare')}>Learn More</button>
    </div>
  </div>
     
  <div className="card beauty-tips-card">
    <img src={HomeBeautyTips} alt="Beauty Tips" />
    <div className="card-content">
      <h2>Beauty Tips</h2>
      <p>Beauty is not just about the products you use but also the habits you adopt. Taking care of your skin, hair, and nails is essential for a healthy, glowing appearance. Drink plenty of water to stay hydrated, as this helps maintain your skin’s elasticity and radiance. Always remove makeup before bed to allow your skin to breathe and repair overnight. Regularly exfoliate to remove dead skin cells and promote a smoother texture. Protect your skin from the sun with SPF to prevent premature aging and sun damage. Additionally, a balanced diet full of vitamins and minerals will nourish your body, enhancing your natural beauty. Simple self-care rituals can go a long way in helping you feel confident and beautiful every day.</p>
      <div className="card-links">
      <span onClick={() => onNavigate('beautytips')}>Beauty Hacks</span>  | 
            <span onClick={() => onNavigate('beautytips')}>Beauty Recipes for Different Skin Types</span>
          </div>
      <button className="learn-more-btn" onClick={() => onNavigate('beautytips')}>Learn More</button>
    </div>
  </div>
</div>
  );
};

export default HomePage;
