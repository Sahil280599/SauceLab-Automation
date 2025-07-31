/**
 * Messages Configuration
 * Centralized location for all application messages, error messages, and text content
 */

export const Messages = {
    // Success Messages
    SUCCESS: {
        LOGIN_SUCCESS: 'Successfully logged in',
        LOGOUT_SUCCESS: 'Successfully logged out',
        PRODUCT_ADDED: 'Product added to cart',
        PRODUCT_REMOVED: 'Product removed from cart',
        ORDER_COMPLETED: 'Thank you for your order!',
        CHECKOUT_COMPLETED: 'Checkout completed successfully'
    },

    // Error Messages
    ERROR: {
        LOGIN_FAILED: 'Epic sadface: Username and password do not match any user in this service',
        LOCKED_USER: 'Epic sadface: Sorry, this user has been locked out.',
        REQUIRED_FIELD: 'Error: First Name is required',
        INVALID_CREDENTIALS: 'Invalid username or password',
        PRODUCT_NOT_FOUND: 'Product not found in cart',
        CHECKOUT_ERROR: 'Error during checkout process'
    },

    // Validation Messages
    VALIDATION: {
        FIRST_NAME_REQUIRED: 'Error: First Name is required',
        LAST_NAME_REQUIRED: 'Error: Last Name is required',
        POSTAL_CODE_REQUIRED: 'Error: Postal Code is required',
        INVALID_EMAIL: 'Please enter a valid email address',
        PASSWORD_TOO_SHORT: 'Password must be at least 8 characters'
    },

    // UI Text
    UI: {
        LOGIN_TITLE: 'Swag Labs',
        INVENTORY_TITLE: 'Products',
        CART_TITLE: 'Your Cart',
        CHECKOUT_TITLE: 'Checkout: Your Information',
        CHECKOUT_OVERVIEW_TITLE: 'Checkout: Overview',
        CHECKOUT_COMPLETE_TITLE: 'Checkout: Complete!',
        
        // Buttons
        LOGIN_BUTTON: 'Login',
        LOGOUT_BUTTON: 'Logout',
        ADD_TO_CART: 'Add to cart',
        REMOVE: 'Remove',
        CHECKOUT: 'Checkout',
        CONTINUE: 'Continue',
        FINISH: 'Finish',
        CANCEL: 'Cancel',
        
        // Links
        SHOPPING_CART: 'Shopping Cart',
        BURGER_MENU: 'Open Menu',
        CLOSE_MENU: 'Close Menu',
        
        // Labels
        USERNAME_LABEL: 'Username',
        PASSWORD_LABEL: 'Password',
        FIRST_NAME_LABEL: 'First Name',
        LAST_NAME_LABEL: 'Last Name',
        POSTAL_CODE_LABEL: 'Postal Code'
    },

    // Test Data
    TEST_DATA: {
        // Usernames
        STANDARD_USER: 'standard_user',
        LOCKED_USER: 'locked_out_user',
        PROBLEM_USER: 'problem_user',
        PERFORMANCE_USER: 'performance_glitch_user',
        
        // Passwords
        DEFAULT_PASSWORD: 'secret_sauce',
        
        // Product Names
        PRODUCTS: {
            BACKPACK: 'Sauce Labs Backpack',
            BIKE_LIGHT: 'Sauce Labs Bike Light',
            BOLT_TSHIRT: 'Sauce Labs Bolt T-Shirt',
            FLEECE_JACKET: 'Sauce Labs Fleece Jacket',
            ONESIE: 'Sauce Labs Onesie',
            TSHIRT_RED: 'Test.allTheThings() T-Shirt (Red)'
        },
        
        // Personal Information
        FIRST_NAME: 'John',
        LAST_NAME: 'Doe',
        POSTAL_CODE: '12345'
    },

    // Order Messages
    ORDER: {
        COMPLETION_MESSAGE: 'Thank you for your order!',
        COMPLETION_DESCRIPTION: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        ORDER_NUMBER_PREFIX: 'Order #',
        SHIPPING_INFO: 'Free Pony Express Delivery!'
    },

    // Cart Messages
    CART: {
        EMPTY_CART: 'Your cart is empty',
        ITEMS_IN_CART: 'items in cart',
        CART_BADGE: 'shopping cart badge'
    }
} as const;

// Type for message keys
export type MessageKey = keyof typeof Messages; 