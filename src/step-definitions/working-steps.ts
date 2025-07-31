import { expect } from '@playwright/test';

/**
 * Working step definitions for basic functionality
 */

export async function navigateToLoginPage(this: any): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
}

export async function verifyLoginForm(this: any): Promise<void> {
    await expect(this.page.locator('[data-test="username"]')).toBeVisible();
    await expect(this.page.locator('[data-test="password"]')).toBeVisible();
    await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
}

export async function loginWithCredentials(this: any, username: string, password: string): Promise<void> {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
}

export async function verifyInventoryPage(this: any): Promise<void> {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(this.page.locator('.inventory_item')).toBeVisible();
}

export async function addProductToCart(this: any, productName: string): Promise<void> {
    const productItem = this.page.locator(`.inventory_item:has-text("${productName}")`);
    const addToCartButton = productItem.locator('[data-test*="add-to-cart"]');
    await addToCartButton.click();
}

export async function verifyCartBadgeCount(this: any, expectedCount: string): Promise<void> {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(expectedCount);
} 