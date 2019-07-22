import { Given, When , Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.npmjs.com/";

Given('Eu abro Página NPM',()=>{
    cy.visit(url)
});

When('Eu clico em botão "See plans"',()=>{
    cy.get('a').contains('See plans').click()
})

Then('Vou para página com titulo "npm | Products"',()=>{
    cy.title().should('include','npm | Products')
});

