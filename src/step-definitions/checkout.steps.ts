import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from '../support/world';
import { delay } from '../support/utils';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

Given('I have {string} in my cart', async function(this: World, productName: string) {
    await this.inventoryPage.addProductToCart(productName);
    await delay(1000); // 1 second delay
    await this.inventoryPage.expectCartBadgeCount('1');
});

When('I go to the cart page', async function(this: World) {
    await this.inventoryPage.clickShoppingCartLink();
    await delay(1000); // 1 second delay
});

When('I verify {string} is in the cart', async function(this: World, productName: string) {
    await this.cartPage.expectProductInCart(productName);
    await delay(1000); // 1 second delay
});

When('I proceed to checkout', async function(this: World) {
    await this.cartPage.clickCheckout();
    await delay(1000); // 1 second delay
});

When('I enter first name {string}', async function(this: World, firstName: string) {
    await this.checkoutPage.enterFirstName(firstName);
    await delay(500); // 0.5 second delay
});

When('I enter last name {string}', async function(this: World, lastName: string) {
    await this.checkoutPage.enterLastName(lastName);
    await delay(500); // 0.5 second delay
});

When('I enter postal code {string}', async function(this: World, postalCode: string) {
    await this.checkoutPage.enterPostalCode(postalCode);
    await delay(500); // 0.5 second delay
});

When('I click continue', async function(this: World) {
    await this.checkoutPage.clickContinue();
    await delay(1000); // 1 second delay
});

When('I click finish', async function(this: World) {
    await this.checkoutOverviewPage.clickFinish();
    await delay(1000); // 1 second delay
});

When('I click cancel', async function(this: World) {
    await this.checkoutPage.clickCancel();
    await delay(1000); // 1 second delay
});

Then('I should see the checkout overview', async function(this: World) {
    await this.checkoutOverviewPage.expectToBeOnCheckoutOverviewPage();
    await delay(1000); // 1 second delay
});

Then('I should see {string} in the overview', async function(this: World, productName: string) {
    await this.checkoutOverviewPage.expectProductInOverview(productName);
    await delay(1000); // 1 second delay
});

Then('I should see the order confirmation message', async function(this: World) {
    await this.checkoutCompletePage.expectToBeOnCheckoutCompletePage();
    await this.checkoutCompletePage.expectOrderConfirmationMessage();
    await delay(1000); // 1 second delay
});

Then('I should see an error message {string}', async function(this: World, expectedMessage: string) {
    await this.checkoutPage.expectErrorMessage(expectedMessage);
    await delay(1000); // 1 second delay
});

Then('I should be redirected to the inventory page', async function(this: World) {
    await this.inventoryPage.expectToBeOnInventoryPage();
    await delay(1000); // 1 second delay
});

Then('I should be on the cart page', async function(this: World) {
    await this.cartPage.expectToBeOnCartPage();
    await delay(1000); // 1 second delay
}); 