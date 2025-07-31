import { Page, Locator, expect } from '@playwright/test';
import { URLs } from '../config';

/**
 * Page Object Model for SauceDemo Checkout Overview Page
 */
export class CheckoutOverviewPage {
    readonly page: Page;
    readonly checkoutItems: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutItems = page.locator('.cart_item');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    /**
     * Verify user is on checkout overview page
     */
    async expectToBeOnCheckoutOverviewPage(): Promise<void> {
        await expect(this.page).toHaveURL(URLs.CHECKOUT_OVERVIEW_PAGE);
    }

    /**
     * Check if product is in checkout overview
     */
    async isProductInOverview(productName: string): Promise<boolean> {
        const productItem = this.page.locator(`.cart_item:has-text("${productName}")`);
        return await productItem.isVisible();
    }

    /**
     * Verify product is in checkout overview
     */
    async expectProductInOverview(productName: string): Promise<void> {
        const productItem = this.page.locator(`.cart_item:has-text("${productName}")`);
        await expect(productItem).toBeVisible();
    }

    /**
     * Click finish button
     */
    async clickFinish(): Promise<void> {
        await this.finishButton.click();
    }

    /**
     * Click cancel button
     */
    async clickCancel(): Promise<void> {
        await this.cancelButton.click();
    }
} 