import React from 'react';
import './ProductDropdown.css';

const ProductDropdown = ({ isOpen, productMenuData }) => {

  const handleCategoryClick = (href) => {
    console.log('Navigate to category:', href);
  };

  const handleProductClick = (href) => {
    console.log('Navigate to product:', href);
  };

  const handleViewAll = () => {
    console.log('Navigate to all products');
  };

  if (!isOpen) return null;

  return (
    <div
      className="product-dropdown"
      role="menu"
      aria-label="Products menu"
      onMouseEnter={(e) => {
        // Keep dropdown open when hovering over it
        e.stopPropagation();
      }}
      onMouseLeave={(e) => {
        // Keep dropdown open when hovering over it
        e.stopPropagation();
      }}
    >
      <div className="dropdown-content">
        {/* Categories Section */}
        <div className="dropdown-section">
          <h3 className="dropdown-section-title">Categories</h3>
          <ul className="dropdown-list">
            {productMenuData.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={category.href}
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category.href);
                  }}
                  role="menuitem"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Section */}
        {productMenuData.featured && productMenuData.featured.length > 0 && (
          <div className="dropdown-section">
            <h3 className="dropdown-section-title">Featured</h3>
            <ul className="dropdown-list">
              {productMenuData.featured.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.href}
                    className="dropdown-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleProductClick(product.href);
                    }}
                    role="menuitem"
                  >
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View All CTA */}
        <div className="dropdown-footer">
          <button
            className="dropdown-cta"
            onClick={handleViewAll}
            role="menuitem"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;

