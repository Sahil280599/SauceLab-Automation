Feature: Smoke Test
  As a tester
  I want to verify the framework is working
  So that I can ensure everything is set up correctly
 
  @smoke
  Scenario: Verify SauceDemo is accessible
    Given I am on the SauceDemo login page
    Then I should see the login form 