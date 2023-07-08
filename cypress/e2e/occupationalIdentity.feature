Feature: occupational identity Scenarios

  Background: login and sweich to hse system
    Given user in login page
    When user enter valid username and password
    And user click on login button
    And user click HSE Link
    Then user should logged in and redirected
    Given user is in risk management occupational identity


  Scenario: Create then cancel form

    Given user create occupational identity
    And user see disable Register button
    And user cancel form
    And user select Confirm Button
    Then user should be redirected occupational list

