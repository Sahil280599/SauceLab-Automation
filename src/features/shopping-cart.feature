Feature: Shopping Cart Management
  As a user of SauceDemo
  I want to add products to my shopping cart
  So that I can purchase items

  Background:
    Given I am logged in as "standard_user"

  @positive @cart
  Scenario: Add single product to cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"
    And I should see "Sauce Labs Backpack" in the cart

  @positive @cart
  Scenario: Add multiple products to cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart badge should show "2"
    And I should see "Sauce Labs Backpack" in the cart
    And I should see "Sauce Labs Bike Light" in the cart

  @positive @cart
  Scenario: Remove product from cart
    Given I have "Sauce Labs Backpack" in my cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should show "0"
    And I should not see "Sauce Labs Backpack" in the cart

  @positive @cart
  Scenario: View cart contents
    Given I have "Sauce Labs Backpack" in my cart
    When I click on the cart icon
    Then I should be on the cart page
    And I should see "Sauce Labs Backpack" in the cart 