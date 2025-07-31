module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/step-definitions/*.ts', 'src/support/*.ts'],
    format: ['progress-bar', 'html:reports/cucumber-report.html', 'json:reports/cucumber-report.json'],
    formatOptions: {
      html: {
        metadata: {
          'App Version': '1.0.0',
          'Test Environment': 'SauceDemo',
          'Browser': 'Chrome',
          'Platform': 'Windows 10',
          'Parallel': 'Scenarios',
          'Executed': 'Local'
        }
      }
    },
    worldParameters: {
      headless: false
    }
  }
}; 