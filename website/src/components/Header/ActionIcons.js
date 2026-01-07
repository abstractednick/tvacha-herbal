import React, { useState, useRef, useEffect } from 'react';
import './ActionIcons.css';

const ActionIcons = ({ authState, cartState }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const authMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authMenuRef.current && !authMenuRef.current.contains(event.target)) {
        setIsAuthMenuOpen(false);
      }
    };

    if (isAuthMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAuthMenuOpen]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    console.log('Open search modal');
  };

  const handleAuthClick = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen);
  };

  const handleCartClick = () => {
    console.log('Navigate to cart');
  };

  return (
    <div className="action-icons">
      {/* Search Icon */}
      <button
        className="action-icon"
        onClick={handleSearchClick}
        aria-label="Search"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19L14.65 14.65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Auth Icon */}
      <div className="action-icon-wrapper" ref={authMenuRef}>
        <button
          className="action-icon"
          onClick={handleAuthClick}
          aria-label="Account"
          aria-expanded={isAuthMenuOpen}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12C5.58172 12 2 14.2386 2 17V20H18V17C18 14.2386 14.4183 12 10 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Auth Dropdown */}
        {isAuthMenuOpen && (
          <div className="auth-dropdown" role="menu">
            {authState.isLoggedIn ? (
              <>
                <a href="/account" className="auth-dropdown-item" role="menuitem">My Account</a>
                <a href="/orders" className="auth-dropdown-item" role="menuitem">Orders</a>
                <button className="auth-dropdown-item" role="menuitem" onClick={() => console.log('Logout')}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="auth-dropdown-item" role="menuitem">Login</a>
                <a href="/signup" className="auth-dropdown-item" role="menuitem">Sign Up</a>
              </>
            )}
          </div>
        )}
      </div>

      {/* Cart Icon */}
      <button
        className="action-icon cart-icon"
        onClick={handleCartClick}
        aria-label={`Cart with ${cartState.itemCount} items`}
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 2H4L6 14H16L18 6H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="17" r="1.5" fill="currentColor" />
          <circle cx="15" cy="17" r="1.5" fill="currentColor" />
        </svg>
        {cartState.itemCount > 0 && (
          <span className="cart-badge" aria-label={`${cartState.itemCount} items in cart`}>
            {cartState.itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ActionIcons;

