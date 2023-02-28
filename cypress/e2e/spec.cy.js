beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('Pokedex', () => {
  it('deve renderizar pokedex e procurar pokemon', () => {
    cy.validaPokedex();
  })
})