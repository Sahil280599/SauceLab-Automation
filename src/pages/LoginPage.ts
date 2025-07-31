import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for SauceDemo Login Page
 */
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    /**
     * Navigate to the SauceDemo login page
     */
    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    /**
     * Enter username in the username field
     */
    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    /**
     * Enter password in the password field
     */
    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    /**
     * Click the login button
     */
    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    /**
     * Perform login with provided credentials
     */
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    /**
     * Get the error message text
     */
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

    /**
     * Verify error message is displayed
     */
    async expectErrorMessage(expectedMessage: string): Promise<void> {
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }

    /**
     * Verify user is on login page
     */
    async expectToBeOnLoginPage(): Promise<void> {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
        await expect(this.loginButton).toBeVisible();
    }
} 