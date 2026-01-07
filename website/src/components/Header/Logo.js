import React from 'react';
import './Logo.css';

const Logo = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="header-logo" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    }}>
      <img
        src="/logo.svg"
        alt="Tvacha Herbal Logo"
        className="logo-img"
      />
    </div>
  );
};

export default Logo;

