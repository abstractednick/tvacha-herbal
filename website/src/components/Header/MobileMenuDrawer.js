import React, { useState, useEffect } from 'react';
import ProductDropdownMobile from './ProductDropdownMobile';
import './MobileMenuDrawer.css';

const MobileMenuDrawer = ({ isOpen, onClose, menuItems, productMenuData, authState }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = (menuId) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  const handleLinkClick = (href) => {
    console.log('Navigate to:', href);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="mobile-drawer-header">
          <h2 className="mobile-drawer-title">Menu</h2>
          <button
            className="mobile-drawer-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul className="mobile-menu-list">
            {menuItems.map((item) => (
              <li key={item.id} className="mobile-menu-item">
                {item.type === 'dropdown' ? (
                  <>
                    <button
                      className="mobile-menu-link mobile-menu-toggle"
                      onClick={() => toggleMenu(item.id)}
                      aria-expanded={expandedMenu === item.id}
                    >
                      {item.label}
                      <svg
                        className={`mobile-menu-arrow ${expandedMenu === item.id ? 'expanded' : ''}`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {item.id === 'products' && expandedMenu === item.id && (
                      <ProductDropdownMobile
                        productMenuData={productMenuData}
                        onLinkClick={handleLinkClick}
                      />
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Auth Section */}
          <div className="mobile-drawer-auth">
            {authState.isLoggedIn ? (
              <>
                <a href="/account" className="mobile-auth-link" onClick={(e) => { e.preventDefault(); handleLinkClick('/account'); }}>
                  My Account
                </a>
                <a href="/orders" className="mobile-auth-link" onClick={(e) => { e.preventDefault(); handleLinkClick('/orders'); }}>
                  Orders
                </a>
                <button className="mobile-auth-link" onClick={() => { console.log('Logout'); onClose(); }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="mobile-auth-link" onClick={(e) => { e.preventDefault(); handleLinkClick('/login'); }}>
                  Login
                </a>
                <a href="/signup" className="mobile-auth-link mobile-auth-primary" onClick={(e) => { e.preventDefault(); handleLinkClick('/signup'); }}>
                  Sign Up
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenuDrawer;

