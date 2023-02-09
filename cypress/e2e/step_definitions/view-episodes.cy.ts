import { Then, When } from '@badeball/cypress-cucumber-preprocessor';


/* ------ Character Rick Sanchez ------- */
When("I select a View Episodes of a Rick Sanchez",()=>{
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="btn-rick-morty"]').
        eq(0).invoke('show')
        .trigger('mouseenter')
        .wait(3000)
        .click().wait(9000);
});
Then("Show multiples card with Episodes of a Rick Sanchez",()=>{
    cy.get('[data-cy="card-episode-rick-morty"]').eq(0).find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-episode-rick-morty"]').eq(0).find("p").should("have.length","3");
});


/* ------ Character Morty Smith ------- */
When("I select a View Episodes of a Morty Smith",()=>{
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="btn-rick-morty"]').
        eq(1).invoke('show')
        .trigger('mouseenter')
        .wait(3000)
        .click().wait(9000);
});
Then("Show multiples card with Episodes of a Morty Smith",()=>{
    cy.get('[data-cy="card-episode-rick-morty"]').eq(1).find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-episode-rick-morty"]').eq(1).find("p").should("have.length","3");
});



/* ------ Character Summer Smith ------- */
When("I select a View Episodes of a Summer Smith",()=>{
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="btn-rick-morty"]').
        eq(2).invoke('show')
        .trigger('mouseenter')
        .wait(3000)
        .click().wait(9000);
});
Then("Show multiples card with Episodes of a Summer Smith",()=>{
    cy.get('[data-cy="card-episode-rick-morty"]').eq(2).find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-episode-rick-morty"]').eq(2).find("p").should("have.length","3");
});


/* ------ Character Summer Smith ------- */
When("I select a View Episodes of a Beth Smith",()=>{
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="btn-rick-morty"]').
        eq(3).invoke('show')
        .trigger('mouseenter')
        .wait(3000)
        .click().wait(9000);
});
Then("Show multiples card with Episodes of a Beth Smith",()=>{
    cy.get('[data-cy="card-episode-rick-morty"]').eq(3).find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-episode-rick-morty"]').eq(3).find("p").should("have.length","3");
});


/* ------ Character Jerry Smith ------- */
When("I select a View Episodes of a Jerry Smith",()=>{
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="btn-rick-morty"]').
        eq(4).invoke('show')
        .trigger('mouseenter')
        .wait(3000)
        .click().wait(9000);
});
Then("Show multiples card with Episodes of a Jerry Smith",()=>{
    cy.get('[data-cy="card-episode-rick-morty"]').eq(4).find("img").should('have.attr', 'src');
    cy.get('[data-cy="card-episode-rick-morty"]').eq(4).find("p").should("have.length","3");
});






export {};