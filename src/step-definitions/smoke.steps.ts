import { Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from '../support/world';

// Set default timeout for all steps
setDefaultTimeout(60 * 1000);
 
Then('I should see the login form', async function(this: World) {
    await expect(this.page.locator('[data-test="username"]')).toBeVisible();
    await expect(this.page.locator('[data-test="password"]')).toBeVisible();
    await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
}); 