import { World as CucumberWorld, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

export class World extends CucumberWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    
    // Page objects
    private _loginPage?: LoginPage;
    private _inventoryPage?: InventoryPage;
    private _cartPage?: CartPage;
    private _checkoutPage?: CheckoutPage;
    private _checkoutOverviewPage?: CheckoutOverviewPage;
    private _checkoutCompletePage?: CheckoutCompletePage;

    async init(): Promise<void> {
        // Use headless mode in CI environment, headed mode in local development
        const isCI = process.env.CI === 'true';
        this.browser = await chromium.launch({ headless: isCI });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async cleanup(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }

    // Page object getters with lazy initialization
    get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    get inventoryPage(): InventoryPage {
        if (!this._inventoryPage) {
            this._inventoryPage = new InventoryPage(this.page);
        }
        return this._inventoryPage;
    }

    get cartPage(): CartPage {
        if (!this._cartPage) {
            this._cartPage = new CartPage(this.page);
        }
        return this._cartPage;
    }

    get checkoutPage(): CheckoutPage {
        if (!this._checkoutPage) {
            this._checkoutPage = new CheckoutPage(this.page);
        }
        return this._checkoutPage;
    }

    get checkoutOverviewPage(): CheckoutOverviewPage {
        if (!this._checkoutOverviewPage) {
            this._checkoutOverviewPage = new CheckoutOverviewPage(this.page);
        }
        return this._checkoutOverviewPage;
    }

    get checkoutCompletePage(): CheckoutCompletePage {
        if (!this._checkoutCompletePage) {
            this._checkoutCompletePage = new CheckoutCompletePage(this.page);
        }
        return this._checkoutCompletePage;
    }
}

setWorldConstructor(World); 