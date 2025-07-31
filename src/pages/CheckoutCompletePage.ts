import { Page, Locator, expect } from '@playwright/test';
import { URLs, Messages } from '../config';

/**
 * Page Object Model for SauceDemo Checkout Complete Page
 */
export class CheckoutCompletePage {
    readonly page: Page;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('.complete-text');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    /**
     * Verify user is on checkout complete page
     */
    async expectToBeOnCheckoutCompletePage(): Promise<void> {
        await expect(this.page).toHaveURL(URLs.CHECKOUT_COMPLETE_PAGE);
    }

    /**
     * Verify order confirmation message
     */
    async expectOrderConfirmationMessage(): Promise<void> {
        await expect(this.completeHeader).toHaveText(Messages.ORDER.COMPLETION_MESSAGE);
        await expect(this.completeText).toHaveText(Messages.ORDER.COMPLETION_DESCRIPTION);
    }

    /**
     * Click back home button
     */
    async clickBackHome(): Promise<void> {
        await this.backHomeButton.click();
    }
} 