Cypress.Commands.add("validaPokedex", () => {
    cy.get('.MuiInputBase-input').click().type("bulbasaur")
    cy.get('.MuiGrid-container > :nth-child(1)').should('be.visible').and("contain", "bulbasaur");
})