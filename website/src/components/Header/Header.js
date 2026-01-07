import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ActionIcons from './ActionIcons';
import MobileMenuDrawer from './MobileMenuDrawer';
import { headerConfig } from '../../config/headerConfig';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          {/* Mobile Hamburger */}
          <button
            className="header-hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavMenu menuItems={headerConfig.menuItems} productMenuData={headerConfig.productMenuData} />

          {/* Action Icons */}
          <ActionIcons 
            authState={headerConfig.authState}
            cartState={headerConfig.cartState}
          />
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        menuItems={headerConfig.menuItems}
        productMenuData={headerConfig.productMenuData}
        authState={headerConfig.authState}
      />
    </>
  );
};

export default Header;

