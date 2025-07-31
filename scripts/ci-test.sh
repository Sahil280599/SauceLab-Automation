#!/bin/bash

# CI/CD Pipeline Local Test Script
# This script simulates the CI/CD pipeline locally

set -e  # Exit on any error

echo "🚀 Starting CI/CD Pipeline Local Test..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Step 1: Check Node.js version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm ci
print_status "Dependencies installed successfully"

# Step 3: Install Playwright browsers
echo "🌐 Installing Playwright browsers..."
npx playwright install --with-deps chromium
print_status "Playwright browsers installed"

# Step 4: Create reports directory
echo "📁 Creating reports directory..."
mkdir -p reports/screenshots
print_status "Reports directory created"

# Step 5: TypeScript compilation check
echo "🔧 Running TypeScript compilation check..."
npm run build
print_status "TypeScript compilation successful"

# Step 6: Run smoke test (CI mode)
echo "🧪 Running smoke test (CI mode)..."
CI=true npx cucumber-js src/features/smoke.feature
print_status "Smoke test passed"

# Step 7: Run BDD tests (CI mode)
echo "🧪 Running BDD tests (CI mode)..."

echo "  - Login tests..."
CI=true npx cucumber-js src/features/login.feature
print_status "Login tests passed"

echo "  - Shopping cart tests..."
CI=true npx cucumber-js src/features/shopping-cart.feature
print_status "Shopping cart tests passed"

echo "  - Checkout tests..."
CI=true npx cucumber-js src/features/checkout.feature
print_status "Checkout tests passed"

# Step 8: Run all tests together (CI mode)
echo "🧪 Running all tests together (CI mode)..."
CI=true npx cucumber-js src/features/
print_status "All tests passed"

# Step 9: Generate HTML report
echo "📊 Generating HTML report..."
npm run report:generate
print_status "HTML report generated"

# Step 10: Check for artifacts
echo "📦 Checking generated artifacts..."
if [ -f "reports/cucumber-report.html" ]; then
    print_status "HTML report found"
else
    print_warning "HTML report not found"
fi

if [ -f "reports/cucumber-report.json" ]; then
    print_status "JSON report found"
else
    print_warning "JSON report not found"
fi

# Step 11: Summary
echo ""
echo "🎉 CI/CD Pipeline Local Test Completed Successfully!"
echo ""
echo "📊 Summary:"
echo "  - ✅ Dependencies installed"
echo "  - ✅ Playwright browsers installed"
echo "  - ✅ TypeScript compilation successful"
echo "  - ✅ Smoke test passed"
echo "  - ✅ Login tests passed"
echo "  - ✅ Shopping cart tests passed"
echo "  - ✅ Checkout tests passed"
echo "  - ✅ All tests together passed"
echo "  - ✅ HTML report generated"
echo ""
echo "🚀 Ready for deployment to CI/CD pipeline!"
echo ""
echo "💡 To run tests in headed mode (for debugging):"
echo "   npm run test:headed"
echo ""
echo "💡 To run specific test:"
echo "   npm run test:smoke"
echo "   npm run test:login"
echo "   npm run test:cart"
echo "   npm run test:checkout" 