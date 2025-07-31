import { Page, Locator, expect } from '@playwright/test';
import { URLs } from '../config';

/**
 * Page Object Model for SauceDemo Cart Page
 */
export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly shoppingCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    /**
     * Verify user is on cart page
     */
    async expectToBeOnCartPage(): Promise<void> {
        await expect(this.page).toHaveURL(URLs.CART_PAGE);
    }

    /**
     * Check if product is in cart
     */
    async isProductInCart(productName: string): Promise<boolean> {
        const productItem = this.page.locator(`.cart_item:has-text("${productName}")`);
        return await productItem.isVisible();
    }

    /**
     * Verify product is in cart (dynamic)
     */
    async expectProductInCart(productName: string): Promise<void> {
        const productItem = this.page.getByText(productName);
        await expect(productItem).toBeVisible();
    }

    /**
     * Verify product is not in cart
     */
    async expectProductNotInCart(productName: string): Promise<void> {
        const productItem = this.page.locator(`.cart_item:has-text("${productName}")`);
        await expect(productItem).not.toBeVisible();
    }

    /**
     * Click checkout button
     */
    async clickCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    /**
     * Click continue shopping button
     */
    async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }

    /**
     * Click shopping cart link
     */
    async clickShoppingCartLink(): Promise<void> {
        await this.shoppingCartLink.click();
    }
} 