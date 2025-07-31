import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { World } from './world';
import { takeScreenshot } from './utils';

BeforeAll(async function() {
    console.log('Starting test execution...');
});

Before(async function(this: World) {
    await this.init();
});

After(async function(this: World) {
    // Take screenshot on failure
    if (this.page) {
        try {
            await takeScreenshot(this.page, 'test-failure');
        } catch (error) {
            console.log('Failed to take screenshot:', error);
        }
    }
    await this.cleanup();
});

AfterAll(async function() {
    console.log('Test execution completed.');
}); 