# Playwright BDD Framework for SauceDemo

A comprehensive BDD (Behavior Driven Development) test automation framework using Playwright and TypeScript for testing the SauceDemo web application.

## 🎯 Project Overview

This framework demonstrates automated UI testing using:
- **Playwright** - Modern web automation framework
- **Cucumber** - BDD testing framework with Gherkin syntax
- **TypeScript** - Type-safe JavaScript
- **Page Object Model (POM)** - Design pattern for better code organization

## 🚀 Features Tested

### 1. User Authentication
- ✅ Successful login with valid credentials
- ✅ Login with different user types (standard, problem, performance glitch)
- ✅ Negative login scenarios (invalid credentials, locked user)
- ✅ User logout functionality

### 2. Shopping Cart Management
- ✅ Add single/multiple products to cart
- ✅ Remove products from cart
- ✅ View cart contents
- ✅ Cart badge count validation

### 3. Checkout Process
- ✅ Complete checkout with valid information
- ✅ Checkout with multiple items
- ✅ Negative scenarios (missing required fields)
- ✅ Cancel checkout process

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git
- Docker (optional, for containerized execution)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd playwright-bdd-framework
```

### 2. Install Dependencies
```bash
npm install
```

## ⚙️ Configuration Structure

The framework uses centralized configuration files for better maintainability:

### 📁 Configuration Files

```
src/config/
├── index.ts          # Main configuration exports
├── urls.ts           # All application URLs
└── messages.ts       # All messages, error messages, and test data
```

### 🔗 URLs Configuration (`src/config/urls.ts`)
Centralized location for all application URLs:
```typescript
export const URLs = {
    BASE_URL: 'https://www.saucedemo.com',
    LOGIN_PAGE: 'https://www.saucedemo.com/',
    INVENTORY_PAGE: 'https://www.saucedemo.com/inventory.html',
    CART_PAGE: 'https://www.saucedemo.com/cart.html',
    // ... more URLs
};
```

### 💬 Messages Configuration (`src/config/messages.ts`)
Centralized location for all messages and test data:
```typescript
export const Messages = {
    SUCCESS: {
        LOGIN_SUCCESS: 'Successfully logged in',
        // ... more success messages
    },
    ERROR: {
        LOGIN_FAILED: 'Epic sadface: Username and password do not match...',
        // ... more error messages
    },
    TEST_DATA: {
        STANDARD_USER: 'standard_user',
        DEFAULT_PASSWORD: 'secret_sauce',
        // ... more test data
    }
};
```

### 🎯 Benefits of Centralized Configuration
- ✅ **Single Source of Truth**: All URLs and messages in one place
- ✅ **Easy Maintenance**: Update once, applies everywhere
- ✅ **Type Safety**: TypeScript ensures correct usage
- ✅ **Consistency**: No duplicate or conflicting values
- ✅ **Environment Support**: Easy to switch between environments

## 🏃‍♂️ Test Execution

### Run All Tests
```bash
npm test
```

### Run Specific Feature
```bash
# Login tests
npx cucumber-js src/features/login.feature

# Shopping cart tests
npx cucumber-js src/features/shopping-cart.feature

# Checkout tests
npx cucumber-js src/features/checkout.feature

# Smoke tests
npx cucumber-js src/features/smoke.feature
```

### Run Tests by Tags
```bash
# Run only positive tests
npx cucumber-js --tags "@positive"

# Run only login tests
npx cucumber-js --tags "@login"

# Run only cart tests
npx cucumber-js --tags "@cart"

# Run only checkout tests
npx cucumber-js --tags "@checkout"

# Run negative tests
npx cucumber-js --tags "@negative"
```

### Run Tests with Headed Browser (See the browser)
```bash
npx cucumber-js src/features/*.feature --world-parameters '{"headless": false}'
```

### Run Tests with Dry Run (See what would be executed)
```bash
npx cucumber-js --dry-run
```

## 🐳 Docker Support

### Build Docker Image
```bash
# Standard Dockerfile (Node.js + manual Playwright setup)
npm run docker:build

# Simple Dockerfile (uses official Playwright image)
npm run docker:build:simple
```

### Run Tests in Docker
```bash
# Run all tests
npm run docker:test

# Run specific test suites
npm run docker:test:login
npm run docker:test:checkout
npm run docker:test:smoke

# Run with Docker Compose
docker-compose up playwright-tests
```

### Docker Commands
```bash
# Build image (standard)
docker build -t playwright-bdd-framework .

# Build image (simple)
docker build -f Dockerfile.simple -t playwright-bdd-framework-simple .

# Run container
docker run --rm -v $(pwd)/reports:/app/reports playwright-bdd-framework

# Run specific feature
docker run --rm -v $(pwd)/reports:/app/reports playwright-bdd-framework npx cucumber-js src/features/login.feature

# Clean up Docker resources
npm run docker:clean
```

### Docker Compose Services
- **playwright-tests**: Run all tests
- **test-login**: Run only login tests
- **test-checkout**: Run only checkout tests
- **test-smoke**: Run only smoke tests

### Dockerfile Options
1. **Dockerfile** - Custom Node.js setup with manual Playwright installation
2. **Dockerfile.simple** - Uses official Playwright image (recommended for simplicity)

## 📁 Project Structure

```
playwright-bdd-framework/
├── src/
│   ├── features/                 # Gherkin feature files
│   │   ├── login.feature        # User authentication scenarios
│   │   ├── shopping-cart.feature # Cart management scenarios
│   │   ├── checkout.feature     # Checkout process scenarios
│   │   └── smoke.feature        # Basic smoke test
│   ├── pages/                   # Page Object Model classes
│   │   ├── LoginPage.ts         # Login page interactions
│   │   ├── InventoryPage.ts     # Product inventory page
│   │   ├── CartPage.ts          # Shopping cart page
│   │   ├── CheckoutPage.ts      # Checkout information page
│   │   ├── CheckoutOverviewPage.ts # Order review page
│   │   └── CheckoutCompletePage.ts # Order confirmation page
│   ├── step-definitions/        # Cucumber step implementations
│   │   ├── login.steps.ts       # Login step definitions
│   │   ├── shopping-cart.steps.ts # Cart step definitions
│   │   ├── checkout.steps.ts    # Checkout step definitions
│   │   └── smoke.steps.ts       # Smoke test steps
│   ├── support/                 # Framework support files
│   │   ├── world.ts             # Cucumber world configuration
│   │   └── hooks.ts             # Test lifecycle hooks
│   └── utils/                   # Utility functions
│       └── test-utils.ts        # Common test utilities
├── reports/                     # Test reports and screenshots
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── cucumber.js                 # Cucumber configuration
├── Dockerfile                  # Docker configuration (custom setup)
├── Dockerfile.simple           # Docker configuration (official Playwright image)
├── docker-compose.yml          # Docker Compose configuration
├── .dockerignore               # Docker ignore file
└── README.md                   # Project documentation
```

## 🧪 Test Design

### Testing Types
1. **Functional Testing** - Validating core application functionality
2. **Positive Testing** - Testing with valid inputs and expected outcomes
3. **Negative Testing** - Testing with invalid inputs and error handling
4. **UI Testing** - Validating user interface elements and interactions
5. **Integration Testing** - Testing complete user workflows

### Testing Methodologies
1. **BDD (Behavior Driven Development)** - Using Gherkin syntax for test scenarios
2. **Page Object Model** - Separating page logic from test logic
3. **Data-Driven Testing** - Using different test data sets
4. **Parallel Execution** - Running tests concurrently for faster execution

### Browser Compatibility
- **Chrome** - Primary browser for testing
- **Firefox** - Secondary browser (configurable)
- **Safari** - Secondary browser (configurable)
- **Edge** - Secondary browser (configurable)

## 🔧 Configuration

### Browser Configuration
Edit `cucumber.js` to modify browser settings:
```javascript
module.exports = {
  default: {
    // Browser configuration
    worldParameters: {
      headless: false,  // Set to true for headless mode
      browser: 'chromium'  // Options: chromium, firefox, webkit
    }
  }
};
```

### Test Environment
- **URL**: https://www.saucedemo.com/
- **Test Users**: standard_user, locked_out_user, problem_user, performance_glitch_user

## 📊 Test Reports

### View Reports (Fast & Easy)
```bash
# Open the latest report in browser
npm run report

# Open specific report directory
npm run report:open

# Generate report server (for sharing)
npm run report:generate
```

### Report Features
- ✅ **Instant loading** - No waiting time
- ✅ **Interactive UI** - Modern Playwright interface
- ✅ **Screenshots** - Automatic failure screenshots
- ✅ **Videos** - Test execution videos
- ✅ **Traces** - Step-by-step debugging
- ✅ **Search & Filter** - Easy test navigation
- ✅ **Mobile responsive** - Works on all devices

### Report Location
Reports are automatically generated in the `reports/` directory:
- **HTML Report**: `reports/playwright-report/`
- **JSON Report**: `reports/playwright-report.json`
- **JUnit Report**: `reports/results.xml`
- **Screenshots**: `reports/screenshots/`
- **Videos**: `reports/videos/`
- **Traces**: `reports/traces/`

## ✅ Test Results

### Current Test Status
- **Smoke Test**: ✅ PASSED
- **Login Tests**: ✅ PASSED (8/8 scenarios)
- **Shopping Cart Tests**: ✅ PASSED (4/4 scenarios)
- **Checkout Tests**: ✅ PASSED (6/6 scenarios)
- **Framework Setup**: ✅ WORKING

### Sample Test Execution Output
```
Starting test execution...
Test execution completed.
6 scenarios (6 passed)
62 steps (62 passed)
0m58.374s (executing steps: 0m58.314s)
```

## 🚨 Troubleshooting

### Common Issues

1. **Browser Installation Failed**
   ```bash
   npx playwright install
   ```

2. **TypeScript Compilation Errors**
   ```bash
   npm run build
   ```

3. **Cucumber Step Not Found**
   - Check step definition file imports
   - Verify step pattern matches exactly

4. **Element Not Found**
   - Check if element selectors are correct
   - Verify page has loaded completely
   - Add explicit waits if needed

### Docker Issues

1. **Docker Build Fails**
   ```bash
   docker system prune -a
   npm run docker:build
   ```

2. **Permission Issues**
   ```bash
   sudo chown -R $USER:$USER reports/
   ```

3. **Container Won't Start**
   ```bash
   docker logs playwright-bdd-framework
   ```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

### Contribution Guidelines
- All new features must include BDD test scenarios
- Follow the existing Page Object Model pattern
- Update documentation for any new features

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or issues, please create an issue in the repository.

---

**Note**: This framework is designed for educational and assessment purposes. Always follow best practices for test automation in production environments. 