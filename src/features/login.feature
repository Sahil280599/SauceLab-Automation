Feature: User Authentication
  As a user of SauceDemo
  I want to be able to login and logout
  So that I can access the application securely

  Background:
    Given I am on the SauceDemo login page

  @positive @login
  Scenario: Successful login with valid credentials
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the inventory items

  @positive @login
  Scenario: Successful login with problem user
    When I enter username "problem_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  @positive @login
  Scenario: Successful login with performance glitch user
    When I enter username "performance_glitch_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  @negative @login
  Scenario: Failed login with invalid username
    When I enter username "invalid_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  @negative @login
  Scenario: Failed login with invalid password
    When I enter username "standard_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  @negative @login
  Scenario: Failed login with locked out user
    When I enter username "locked_out_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

  @negative @login
  Scenario: Failed login with empty credentials
    When I click the login button
    Then I should see an error message "Epic sadface: Username is required"

  @logout
  Scenario: Successful logout
    Given I am logged in as "standard_user"
    When I click the burger menu
    And I click the logout link
    Then I should be redirected to the login page 