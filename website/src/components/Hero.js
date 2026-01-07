import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero gradient-mint">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Natural • Clean • Fresh
          </h1>
          <p className="hero-subtitle">
            Discover the gentle power of premium herbal care. 
            Crafted with nature's finest ingredients for your wellness journey.
          </p>
          <div className="hero-actions">
            <Button variant="primary">Explore Products</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

