import React, { useState, useRef, useEffect } from 'react';
import ProductDropdown from './ProductDropdown';
import './NavMenu.css';

const NavMenu = ({ menuItems, productMenuData }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('/');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    // Get current path for active tab
    const currentPath = window.location.pathname;
    setActiveTab(currentPath);

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (itemId) => {
    if (activeDropdown !== itemId) {
      setActiveDropdown(itemId);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleItemClick = (item) => {
    setActiveTab(item.href);
    if (item.type === 'link') {
      // Navigate to link (placeholder - will use React Router later)
      console.log('Navigate to:', item.href);
    } else if (item.type === 'dropdown') {
      // Navigate to main page (e.g., /products)
      console.log('Navigate to:', item.href);
    }
  };

  const isActive = (item) => {
    if (item.href === '/') {
      return activeTab === '/' || activeTab === '';
    }
    return activeTab === item.href || activeTab.startsWith(item.href + '/');
  };

  return (
    <nav className="nav-menu" ref={menuRef} aria-label="Main navigation">
      <ul className="nav-menu-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="nav-menu-item"
            onMouseEnter={() => item.type === 'dropdown' && handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.href}
              className={`nav-menu-link ${isActive(item) ? 'nav-menu-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item);
              }}
              aria-haspopup={item.type === 'dropdown' ? 'true' : undefined}
              aria-expanded={item.type === 'dropdown' && activeDropdown === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
            {item.type === 'dropdown' && item.id === 'products' && (
              <ProductDropdown
                isOpen={activeDropdown === item.id}
                productMenuData={productMenuData}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

