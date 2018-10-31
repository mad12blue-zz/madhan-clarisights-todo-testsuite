Feature: Manage Todo in the Todo management app

  I want to Manage my Todos in the Todo management app

  Scenario: Opening todo management app
    Given I open todo management page
    Then I see "Todo" in the title

  Scenario: Adding new todo in the todo management app
    Given I am on todo management app
    When I add new todo "Todo_1,Todo_2,Todo_3,Todo_4,Todo_5,Todo_6"
    Then I see todo "Todo_1,Todo_2,Todo_3,Todo_4,Todo_5,Todo_6" added in the list
    Then I see the item count "6"

  Scenario: Deleting todos in the todo management app
    Given I am on todo management app
    When I delete todos "Todo_1,Todo_2"
    Then I see todo "Todo_3,Todo_4,Todo_5,Todo_6" added in the list
    Then I see the item count "4"

  Scenario: Marking a todo as complete in the todo management app
    Given I am on todo management app
    When I check todos "Todo_3,Todo_4" as complete
    Then I see todos "Todo_3,Todo_4" marked as completed
    Then I see the item count "2"

  Scenario: Verifying the active filter in the todo management app
    Given I am on todo management app
    When I click on "Active" tab in the footer
    Then I see todo "Todo_5,Todo_6" added in the list
  
  Scenario: Verifying the completed filter in the todo management app
    Given I am on todo management app
    When I click on "Completed" tab in the footer
    Then I see todo "Todo_3,Todo_4" added in the list
  
  Scenario: Verifying the all filter in the todo management app
    Given I am on todo management app
    When I click on "All" tab in the footer
    Then I see todo "Todo_3,Todo_4,Todo_5,Todo_6" added in the list

  Scenario: Clearing completed todos in the todo management app
    Given I am on todo management app
    When I clear completed todos
    Then I see todo "Todo_5,Todo_6" added in the list

  Scenario: Marking all todos as completed in the todo management app
    Given I am on todo management app
    When I mark all todos as completed
    Then I see the item count "0"

  Scenario: Unmarking all todos as completed in the todo management app
    Given I am on todo management app
    When I unmark all todos as completed
    Then I see the item count "2"