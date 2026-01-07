/**
 * Header Configuration - Placeholder Data
 * This file will be replaced with backend API data later
 */

export const headerConfig = {
  // Navigation Menu Items
  menuItems: [
    {
      id: 'home',
      label: 'Home',
      type: 'link',
      href: '/'
    },
    {
      id: 'products',
      label: 'Products',
      type: 'dropdown',
      href: '/products'
    },
    {
      id: 'about',
      label: 'About Us',
      type: 'link',
      href: '/about'
    },
    {
      id: 'contact',
      label: 'Contact Us',
      type: 'link',
      href: '/contact'
    }
  ],

  // Products Dropdown Data (Placeholder)
  productMenuData: {
    categories: [
      { id: 'cat-1', name: 'Category One', href: '/products/category-one' },
      { id: 'cat-2', name: 'Category Two', href: '/products/category-two' },
      { id: 'cat-3', name: 'Category Three', href: '/products/category-three' },
      { id: 'cat-4', name: 'Category Four', href: '/products/category-four' }
    ],
    featured: [
      { id: 'prod-1', title: 'Product Placeholder One', href: '/products/product-one' },
      { id: 'prod-2', title: 'Product Placeholder Two', href: '/products/product-two' }
    ]
  },

  // Auth State (Placeholder)
  authState: {
    isLoggedIn: false,
    user: null
  },

  // Cart State (Placeholder)
  cartState: {
    itemCount: 0
  }
};

