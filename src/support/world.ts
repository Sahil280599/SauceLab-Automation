import { World as CucumberWorld, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class World extends CucumberWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    async init(): Promise<void> {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async cleanup(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

setWorldConstructor(World); 