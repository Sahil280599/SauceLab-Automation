import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('I am on the SauceDemo login page', async function(this: any) {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.expectToBeOnLoginPage();
});

Given('I am logged in as {string}', async function(this: any, username: string) {
    loginPage = new LoginPage(this.page);
    inventoryPage = new InventoryPage(this.page);
    await loginPage.goto();
    await loginPage.login(username, 'secret_sauce');
    await inventoryPage.expectToBeOnInventoryPage();
});

When('I enter username {string}', async function(this: any, username: string) {
    await loginPage.enterUsername(username);
});

When('I enter password {string}', async function(this: any, password: string) {
    await loginPage.enterPassword(password);
});

When('I click the login button', async function(this: any) {
    await loginPage.clickLogin();
});

Then('I should see the inventory items', async function(this: any) {
    await inventoryPage.expectInventoryItemsVisible();
});

When('I click the burger menu', async function(this: any) {
    await inventoryPage.clickBurgerMenu();
});

When('I click the logout link', async function(this: any) {
    await inventoryPage.clickLogout();
});

Then('I should be redirected to the login page', async function(this: any) {
    await loginPage.expectToBeOnLoginPage();
}); 