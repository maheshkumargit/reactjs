Feature: Home page
  Scenario: Open Home Page
    When I visit "/#"
    Then I should see "Hello, World"
