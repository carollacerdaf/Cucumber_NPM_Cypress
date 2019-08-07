import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I open NPM`,()=>{
    cy.visit('https://www.npmjs.com/')
})

Then(`I see "npm | build amazing things" in the title`,()=>{
    cy.title().should('contain','npm | build amazing things')
})