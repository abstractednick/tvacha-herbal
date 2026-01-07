import React from 'react';
import './ProductDropdownMobile.css';

const ProductDropdownMobile = ({ productMenuData, onLinkClick }) => {
  return (
    <div className="product-dropdown-mobile">
      {/* Categories */}
      <div className="mobile-dropdown-section">
        <h4 className="mobile-dropdown-title">Categories</h4>
        <ul className="mobile-dropdown-list">
          {productMenuData.categories.map((category) => (
            <li key={category.id}>
              <a
                href={category.href}
                className="mobile-dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(category.href);
                }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured */}
      {productMenuData.featured && productMenuData.featured.length > 0 && (
        <div className="mobile-dropdown-section">
          <h4 className="mobile-dropdown-title">Featured</h4>
          <ul className="mobile-dropdown-list">
            {productMenuData.featured.map((product) => (
              <li key={product.id}>
                <a
                  href={product.href}
                  className="mobile-dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(product.href);
                  }}
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* View All */}
      <div className="mobile-dropdown-footer">
        <a
          href="/products"
          className="mobile-dropdown-cta"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick('/products');
          }}
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

export default ProductDropdownMobile;

