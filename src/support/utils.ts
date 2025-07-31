/**
 * Utility functions for test automation
 */

/**
 * Helper function to add delays between actions
 * @param ms - Milliseconds to delay
 */
export async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Helper function to wait for page to be ready
 * @param page - Playwright page object
 */
export async function waitForPageReady(page: any): Promise<void> {
    await page.waitForLoadState('networkidle');
}

/**
 * Helper function to take screenshot on failure
 * @param page - Playwright page object
 * @param name - Screenshot name
 */
export async function takeScreenshot(page: any, name: string): Promise<void> {
    await page.screenshot({ 
        path: `reports/screenshots/${name}-${Date.now()}.png`,
        fullPage: true 
    });
} 