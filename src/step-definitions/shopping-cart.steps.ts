import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

let inventoryPage: InventoryPage;
let cartPage: CartPage;

Given('I have {string} and {string} in my cart', async function(this: any, product1: string, product2: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addProductToCart(product1);
    await inventoryPage.addProductToCart(product2);
    await inventoryPage.expectCartBadgeCount('2');
});

When('I add {string} to the cart', async function(this: any, productName: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addProductToCart(productName);
});

When('I remove {string} from the cart', async function(this: any, productName: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.removeProductFromCart(productName);
});

When('I click on the cart icon', async function(this: any) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.clickCartIcon();
});

Then('the cart badge should show {string}', async function(this: any, expectedCount: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.expectCartBadgeCount(expectedCount);
});

Then('I should see {string} in the cart', async function(this: any, productName: string) {
    // First navigate to cart page if not already there
    if (!this.page.url().includes('cart.html')) {
        inventoryPage = new InventoryPage(this.page);
        await inventoryPage.clickCartIcon();
    }
    cartPage = new CartPage(this.page);
    await cartPage.expectProductInCart(productName);
});

Then('I should not see {string} in the cart', async function(this: any, productName: string) {
    // First navigate to cart page if not already there
    if (!this.page.url().includes('cart.html')) {
        inventoryPage = new InventoryPage(this.page);
        await inventoryPage.clickCartIcon();
    }
    cartPage = new CartPage(this.page);
    await cartPage.expectProductNotInCart(productName);
}); 