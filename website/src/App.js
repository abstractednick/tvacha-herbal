import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Product Section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center">
            <h2>Our Premium Herbal Collection</h2>
            <p className="text-secondary">
              Carefully curated natural ingredients for your wellness
            </p>
          </div>
        </div>
      </section>

      {/* Ingredient Section */}
      <section className="section bg-mint">
        <div className="container">
          <div className="text-center">
            <h2>Pure Natural Ingredients</h2>
            <p className="text-secondary">
              Sourced from nature, crafted with care
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-deep-green">
        <div className="container text-center">
          <h2 style={{ color: 'var(--text-white)' }}>Start Your Herbal Journey</h2>
          <p style={{ color: 'var(--soft-mint)', marginBottom: 'var(--spacing-xl)' }}>
            Experience the gentle power of nature
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
