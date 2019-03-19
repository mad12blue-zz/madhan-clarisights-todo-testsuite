# Feature Google search is used as a search engine
Feature: Search feature in Google web app
  I want to perform Search in the Google web app

# Scenario to launch google search engine
  Scenario: Opening google search engine
    Given I open google search page
    Then I see "Google" in the title

# Scenario to search in google search engine
  Scenario: Generic search in the google search engine
    Given I am on google search page
    When I search for the word "relayr"
    Then I see "10" suggested items listed
    Then I see list of suggested search result with word "relay" in it

# Scenario to undo search in google search engine
  Scenario: Undo search in the google search engine
    Given I am on google search page
    Given I have already entered search text "relayr" on google search page
    When I delete the search text
    Then I dont see list of suggested search result

# Scenario to select search results in google search engine
  Scenario: Selecting single result from search results
    Given I am on google search page
    When I search for the word "relayr"
    When I click on the first search result
    Then I see search results page loaded