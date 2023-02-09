import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When("I go to Rick and Morty Page",()=>{
    cy.visit("http://localhost:3000/");
});
Then("Show multiples card with Characters",()=>{
    cy.get("h2").should("have.text","Characters Rick and Morty");
    cy.get('[data-cy="card-rick-morty"]').first().find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-rick-morty"]').first().find("p").should("have.length","3");

    cy.get('[data-cy="card-rick-morty"]').last().find("img").should('have.attr', 'src')
    cy.get('[data-cy="card-rick-morty"]').last().find("p").should("have.length","3");
});

export {};