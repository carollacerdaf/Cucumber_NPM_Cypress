import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given(`I open NPM`,()=>{
    cy.visit('https://www.npmjs.com/')

})

Then(`I type "Cypress" on input`,()=>{
    cy.get('input[type="search"]').type('cypress')
})

When(`I click on Search`,()=>{
    cy.get('button[type="submit"]').click()
})

Then(`First result is "cypress"`,()=>{
    cy.get('section:first a').contains('cypress')
})