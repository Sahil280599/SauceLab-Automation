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
npx playwright install --with-deps
print_status "Playwright browsers installed"

# Step 4: Create reports directory
echo "📁 Creating reports directory..."
mkdir -p reports/screenshots
print_status "Reports directory created"

# Step 5: Run smoke test
echo "🧪 Running smoke test..."
npm run test:smoke
print_status "Smoke test passed"

# Step 6: Run BDD tests
echo "🧪 Running BDD tests..."

echo "  - Login tests..."
npm run test:login
print_status "Login tests passed"

echo "  - Shopping cart tests..."
npm run test:cart
print_status "Shopping cart tests passed"

echo "  - Checkout tests..."
npm run test:checkout
print_status "Checkout tests passed"

# Step 7: Generate HTML report
echo "📊 Generating HTML report..."
npm run report
print_status "HTML report generated"

# Step 8: TypeScript compilation
echo "🔧 Running TypeScript compilation..."
npm run build
print_status "TypeScript compilation successful"

# Step 9: Check for artifacts
echo "📦 Checking generated artifacts..."
if [ -f "reports/cucumber-report.html" ]; then
    print_status "HTML report found"
else
    print_warning "HTML report not found"
fi

if [ -d "dist" ]; then
    print_status "Build artifacts found"
else
    print_warning "Build artifacts not found"
fi

# Step 10: Summary
echo ""
echo "🎉 CI/CD Pipeline Local Test Completed Successfully!"
echo ""
echo "📊 Summary:"
echo "  - ✅ Dependencies installed"
echo "  - ✅ Playwright browsers installed"
echo "  - ✅ Smoke test passed"
echo "  - ✅ BDD tests passed"
echo "  - ✅ HTML report generated"
echo "  - ✅ TypeScript compilation successful"
echo ""
echo "🚀 Ready for deployment to CI/CD pipeline!" 