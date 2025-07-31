/**
 * URL Configuration
 * Centralized location for all application URLs
 */

export const URLs = {
    // Base URLs
    BASE_URL: 'https://www.saucedemo.com',
    
    // Page URLs
    LOGIN_PAGE: 'https://www.saucedemo.com/',
    INVENTORY_PAGE: 'https://www.saucedemo.com/inventory.html',
    CART_PAGE: 'https://www.saucedemo.com/cart.html',
    CHECKOUT_PAGE: 'https://www.saucedemo.com/checkout-step-one.html',
    CHECKOUT_OVERVIEW_PAGE: 'https://www.saucedemo.com/checkout-step-two.html',
    CHECKOUT_COMPLETE_PAGE: 'https://www.saucedemo.com/checkout-complete.html',
    
    // API endpoints (if any)
    API_BASE: 'https://www.saucedemo.com/api',
    
    // External URLs
    SAUCE_LABS: 'https://saucelabs.com',
    PLAYWRIGHT_DOCS: 'https://playwright.dev'
} as const;

// Type for URL keys
export type URLKey = keyof typeof URLs; 