import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from '../support/world';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

Given('I have {string} and {string} in my cart', async function(this: World, product1: string, product2: string) {
    await this.inventoryPage.addProductToCart(product1);
    await this.inventoryPage.addProductToCart(product2);
    await this.inventoryPage.expectCartBadgeCount('2');
});

When('I add {string} to the cart', async function(this: World, productName: string) {
    await this.inventoryPage.addProductToCart(productName);
});

When('I remove {string} from the cart', async function(this: World, productName: string) {
    await this.inventoryPage.removeProductFromCart(productName);
});

When('I click on the cart icon', async function(this: World) {
    await this.inventoryPage.clickCartIcon();
});

Then('the cart badge should show {string}', async function(this: World, expectedCount: string) {
    await this.inventoryPage.expectCartBadgeCount(expectedCount);
});

Then('I should see {string} in the cart', async function(this: World, productName: string) {
    // First navigate to cart page if not already there
    if (!this.page.url().includes('cart.html')) {
        await this.inventoryPage.clickCartIcon();
    }
    await this.cartPage.expectProductInCart(productName);
});

Then('I should not see {string} in the cart', async function(this: World, productName: string) {
    // First navigate to cart page if not already there
    if (!this.page.url().includes('cart.html')) {
        await this.inventoryPage.clickCartIcon();
    }
    await this.cartPage.expectProductNotInCart(productName);
}); 