import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from '../support/world';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

Given('I am on the SauceDemo login page', async function(this: World) {
    await this.loginPage.goto();
    await this.loginPage.expectToBeOnLoginPage();
});

Given('I am logged in as {string}', async function(this: World, username: string) {
    await this.loginPage.goto();
    await this.loginPage.login(username, 'secret_sauce');
    await this.inventoryPage.expectToBeOnInventoryPage();
});

When('I enter username {string}', async function(this: World, username: string) {
    await this.loginPage.enterUsername(username);
});

When('I enter password {string}', async function(this: World, password: string) {
    await this.loginPage.enterPassword(password);
});

When('I click the login button', async function(this: World) {
    await this.loginPage.clickLogin();
});

Then('I should see the inventory items', async function(this: World) {
    await this.inventoryPage.expectInventoryItemsVisible();
});

When('I click the burger menu', async function(this: World) {
    await this.inventoryPage.clickBurgerMenu();
});

When('I click the logout link', async function(this: World) {
    await this.inventoryPage.clickLogout();
});

Then('I should be redirected to the login page', async function(this: World) {
    await this.loginPage.expectToBeOnLoginPage();
}); 