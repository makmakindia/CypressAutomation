Feature: E2E ecommerce validation

  Scenario: ecommerce product deliver
    Given I am on ecommerce page
    When I login to the application
    And I add items to cart and checkout
    And Validate total price limit
    Then Select country submit and Verify Thank you