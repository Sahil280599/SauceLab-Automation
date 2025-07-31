const { chromium } = require('@playwright/test');

/**
 * Simple test runner to demonstrate the framework
 */
async function runSmokeTest() {
    console.log('🚀 Starting Smoke Test...');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    try {
        // Test 1: Navigate to SauceDemo
        console.log('📱 Navigating to SauceDemo...');
        await page.goto('https://www.saucedemo.com/');
        
        // Test 2: Verify login form is visible
        console.log('✅ Verifying login form...');
        await page.waitForSelector('[data-test="username"]');
        await page.waitForSelector('[data-test="password"]');
        await page.waitForSelector('[data-test="login-button"]');
        
        // Test 3: Login with valid credentials
        console.log('🔐 Logging in...');
        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');
        
        // Test 4: Verify successful login
        console.log('🏪 Verifying inventory page...');
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await page.waitForSelector('.inventory_item');
        
        // Test 5: Add product to cart
        console.log('🛒 Adding product to cart...');
        const productItem = page.locator('.inventory_item:has-text("Sauce Labs Backpack")');
        const addToCartButton = productItem.locator('[data-test*="add-to-cart"]');
        await addToCartButton.click();
        
        // Test 6: Verify cart badge
        console.log('🔢 Verifying cart badge...');
        await page.waitForSelector('.shopping_cart_badge');
        const cartBadge = await page.locator('.shopping_cart_badge').textContent();
        console.log(`Cart badge shows: ${cartBadge}`);
        
        console.log('🎉 All tests passed! Framework is working correctly.');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
}

// Run the test
runSmokeTest(); 