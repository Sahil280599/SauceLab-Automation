import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { InventoryPage } from '../pages/InventoryPage';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let checkoutOverviewPage: CheckoutOverviewPage;
let checkoutCompletePage: CheckoutCompletePage;
let inventoryPage: InventoryPage;

// Helper function to add delays
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('I have {string} in my cart', async function(this: any, productName: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addProductToCart(productName);
    await delay(1000); // 1 second delay
    await inventoryPage.expectCartBadgeCount('1');
});

When('I go to the cart page', async function(this: any) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.clickShoppingCartLink();
    await delay(1000); // 1 second delay
});

When('I verify {string} is in the cart', async function(this: any, productName: string) {
    cartPage = new CartPage(this.page);
    await cartPage.expectProductInCart(productName);
    await delay(1000); // 1 second delay
});

When('I proceed to checkout', async function(this: any) {
    cartPage = new CartPage(this.page);
    await cartPage.clickCheckout();
    await delay(1000); // 1 second delay
});

When('I enter first name {string}', async function(this: any, firstName: string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.enterFirstName(firstName);
    await delay(500); // 0.5 second delay
});

When('I enter last name {string}', async function(this: any, lastName: string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.enterLastName(lastName);
    await delay(500); // 0.5 second delay
});

When('I enter postal code {string}', async function(this: any, postalCode: string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.enterPostalCode(postalCode);
    await delay(500); // 0.5 second delay
});

When('I click continue', async function(this: any) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.clickContinue();
    await delay(1000); // 1 second delay
});

When('I click finish', async function(this: any) {
    checkoutOverviewPage = new CheckoutOverviewPage(this.page);
    await checkoutOverviewPage.clickFinish();
    await delay(1000); // 1 second delay
});

When('I click cancel', async function(this: any) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.clickCancel();
    await delay(1000); // 1 second delay
});

Then('I should see the checkout overview', async function(this: any) {
    checkoutOverviewPage = new CheckoutOverviewPage(this.page);
    await checkoutOverviewPage.expectToBeOnCheckoutOverviewPage();
    await delay(1000); // 1 second delay
});

Then('I should see {string} in the overview', async function(this: any, productName: string) {
    checkoutOverviewPage = new CheckoutOverviewPage(this.page);
    await checkoutOverviewPage.expectProductInOverview(productName);
    await delay(1000); // 1 second delay
});

Then('I should see the order confirmation message', async function(this: any) {
    checkoutCompletePage = new CheckoutCompletePage(this.page);
    await checkoutCompletePage.expectToBeOnCheckoutCompletePage();
    await checkoutCompletePage.expectOrderConfirmationMessage();
    await delay(1000); // 1 second delay
});

Then('I should see an error message {string}', async function(this: any, expectedMessage: string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.expectErrorMessage(expectedMessage);
    await delay(1000); // 1 second delay
});

Then('I should be redirected to the inventory page', async function(this: any) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.expectToBeOnInventoryPage();
    await delay(1000); // 1 second delay
});

Then('I should be on the cart page', async function(this: any) {
    cartPage = new CartPage(this.page);
    await cartPage.expectToBeOnCartPage();
    await delay(1000); // 1 second delay
}); 