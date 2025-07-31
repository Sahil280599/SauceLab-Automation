import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { World } from './world';

BeforeAll(async function() {
    console.log('Starting test execution...');
});

Before(async function(this: World) {
    await this.init();
});

After(async function(this: World) {
    await this.cleanup();
});

AfterAll(async function() {
    console.log('Test execution completed.');
}); 