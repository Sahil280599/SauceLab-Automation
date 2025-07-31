import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for SauceDemo Checkout Page
 */
export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    /**
     * Verify user is on checkout information page
     */
    async expectToBeOnCheckoutInfoPage(): Promise<void> {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    }

    /**
     * Enter first name
     */
    async enterFirstName(firstName: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
    }

    /**
     * Enter last name
     */
    async enterLastName(lastName: string): Promise<void> {
        await this.lastNameInput.fill(lastName);
    }

    /**
     * Enter postal code
     */
    async enterPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeInput.fill(postalCode);
    }

    /**
     * Click continue button
     */
    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }

    /**
     * Click cancel button
     */
    async clickCancel(): Promise<void> {
        await this.cancelButton.click();
    }

    /**
     * Verify error message is displayed
     */
    async expectErrorMessage(expectedMessage: string): Promise<void> {
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }

    /**
     * Fill checkout information
     */
    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
} 