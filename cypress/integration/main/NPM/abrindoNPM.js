import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.npmjs.com/";

Given("Eu abro Página NPM", () => {
    cy.visit(url)
});

Then('Eu vejo "npm | build amazing things" no titulo', () => {
    cy.title().should("include", "npm | build amazing things")
})
