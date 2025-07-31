Feature: Checkout Process
  As a user of SauceDemo
  I want to complete the checkout process
  So that I can purchase my selected items

  Background:
    Given I am logged in as "standard_user"

  @positive @checkout
  Scenario: Complete checkout with valid information
    Given I have "Sauce Labs Backpack" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I proceed to checkout
    And I enter first name "John"
    And I enter last name "Doe"
    And I enter postal code "12345"
    And I click continue
    Then I should see the checkout overview
    And I should see "Sauce Labs Backpack" in the overview
    When I click finish
    Then I should see the order confirmation message

  @positive @checkout
  Scenario: Complete checkout with multiple items
    Given I have "Sauce Labs Backpack" and "Sauce Labs Bike Light" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I verify "Sauce Labs Bike Light" is in the cart
    And I proceed to checkout
    And I enter first name "Jane"
    And I enter last name "Smith"
    And I enter postal code "54321"
    And I click continue
    Then I should see the checkout overview
    And I should see "Sauce Labs Backpack" in the overview
    And I should see "Sauce Labs Bike Light" in the overview
    When I click finish
    Then I should see the order confirmation message

  @negative @checkout
  Scenario: Checkout with missing first name
    Given I have "Sauce Labs Backpack" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I proceed to checkout
    And I enter last name "Doe"
    And I enter postal code "12345"
    And I click continue
    Then I should see an error message "Error: First Name is required"

  @negative @checkout
  Scenario: Checkout with missing last name
    Given I have "Sauce Labs Backpack" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I proceed to checkout
    And I enter first name "John"
    And I enter postal code "12345"
    And I click continue
    Then I should see an error message "Error: Last Name is required"

  @negative @checkout
  Scenario: Checkout with missing postal code
    Given I have "Sauce Labs Backpack" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I proceed to checkout
    And I enter first name "John"
    And I enter last name "Doe"
    And I click continue
    Then I should see an error message "Error: Postal Code is required"

  @checkout
  Scenario: Cancel checkout process
    Given I have "Sauce Labs Backpack" in my cart
    When I go to the cart page
    And I verify "Sauce Labs Backpack" is in the cart
    And I proceed to checkout
    And I click cancel
    Then I should be on the cart page 