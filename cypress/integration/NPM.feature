Feature: NPM page

    Scenario: Opening NPM
        Given I open NPM
        Then I see "npm | build amazing things" in the title

    Scenario: Searching in NPM
        Given I open NPM
        Then I type "Cypress" on input
        When I click on Search
        Then First result is "cypress"

