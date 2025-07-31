import { Page, Locator, expect } from '@playwright/test';
import { URLs } from '../config';

/**
 * Page Object Model for SauceDemo Inventory Page
 */
export class InventoryPage {
    readonly page: Page;
    readonly inventoryItems: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;
    readonly shoppingCartLink: Locator;
    readonly burgerMenu: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    /**
     * Verify user is on inventory page
     */
    async expectToBeOnInventoryPage(): Promise<void> {
        await expect(this.page).toHaveURL(URLs.INVENTORY_PAGE);
        await expect(this.inventoryItems.first()).toBeVisible();
    }

    /**
     * Add product to cart by product name
     */
    async addProductToCart(productName: string): Promise<void> {
        const productItem = this.page.locator(`.inventory_item:has-text("${productName}")`);
        const addToCartButton = productItem.locator('[data-test*="add-to-cart"]');
        await addToCartButton.click();
    }

    /**
     * Remove product from cart by product name
     */
    async removeProductFromCart(productName: string): Promise<void> {
        const productItem = this.page.locator(`.inventory_item:has-text("${productName}")`);
        const removeButton = productItem.locator('[data-test*="remove"]');
        await removeButton.click();
    }

    /**
     * Get cart badge count
     */
    async getCartBadgeCount(): Promise<string> {
        const isVisible = await this.cartBadge.isVisible();
        return isVisible ? await this.cartBadge.textContent() || '0' : '0';
    }

    /**
     * Verify cart badge shows expected count
     */
    async expectCartBadgeCount(expectedCount: string): Promise<void> {
        if (expectedCount === '0') {
            // When cart is empty, badge should not be visible
            await expect(this.cartBadge).not.toBeVisible();
        } else {
            // When cart has items, badge should be visible with correct count
            await expect(this.cartBadge).toBeVisible();
            await expect(this.cartBadge).toHaveText(expectedCount);
        }
    }

    /**
     * Click on cart icon
     */
    async clickCartIcon(): Promise<void> {
        await this.cartIcon.click();
    }

    /**
     * Click shopping cart link
     */
    async clickShoppingCartLink(): Promise<void> {
        await this.shoppingCartLink.click();
    }

    /**
     * Click burger menu
     */
    async clickBurgerMenu(): Promise<void> {
        await this.burgerMenu.click();
    }

    /**
     * Click logout link
     */
    async clickLogout(): Promise<void> {
        await this.logoutLink.click();
    }

    /**
     * Verify inventory items are visible
     */
    async expectInventoryItemsVisible(): Promise<void> {
        await expect(this.inventoryItems.first()).toBeVisible();
    }
} 