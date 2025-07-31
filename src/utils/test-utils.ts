import { Page } from '@playwright/test';

/**
 * Utility functions for test automation
 */
export class TestUtils {
    /**
     * Wait for element to be visible
     */
    static async waitForElement(page: Page, selector: string, timeout = 5000): Promise<void> {
        await page.waitForSelector(selector, { state: 'visible', timeout });
    }

    /**
     * Take screenshot on failure
     */
    static async takeScreenshot(page: Page, name: string): Promise<void> {
        await page.screenshot({ path: `reports/screenshots/${name}-${Date.now()}.png` });
    }

    /**
     * Generate random string
     */
    static generateRandomString(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Wait for page to load completely
     */
    static async waitForPageLoad(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }
} 