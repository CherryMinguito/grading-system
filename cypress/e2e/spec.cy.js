describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  it('can enter email address and password', () => {
    cy.visit('http://localhost:3000/Dashboard');
    cy.get('[data-cy=email]').type('contact@ojhonrex.ml');
    cy.get('[data-cy=password]').type('yec12');
    cy.get('[data-cy=login]').click();
    cy.url().should('include', 'http://localhost:3000/Dashboard');
  })

  it('tests the dashboard page', () => {
    cy.get('[data-cy=dashboard]').click();

    it('tests the students page', () => {
      cy.get('[data-cy=students]').click();
    })

    beforeEach(() => {
      cy.visit('http://localhost:3000/Dashboard');
    })

    it('can add new students', () => {
      cy.get('[data-cy=add]').eq(0).click();
      cy.get('[data-cy=firstname]').eq(0).type('Jhonrex', { force: true });
      cy.get('[data-cy=lastname]').eq(0).type('Ortiz', { force: true });
      cy.get('[data-cy=course]').eq(0).type('BSIT', { force: true });
      cy.get('[data-cy=address]').eq(0).type('Casili, Consolacion', { force: true });
      cy.get('[data-cy=addstud]').eq(1).click({ force: true });
      cy.url().should('include', 'http://localhost:3000/Dashboard');
    })

    it('can edit the details', () => {
      cy.get('[data-cy=edit]').eq(0).click({ force: true });
      cy.get('[data-cy=edit-fname]').eq(0).type('Yec', { force: true });
      cy.get('[data-cy=edit-lname]').eq(0).type('Cec', { force: true });
      cy.get('[data-cy=edit-course]').eq(0).type('BSCS', { force: true });
      cy.get('[data-cy=edit-address]').eq(0).type('Cebu City', { force: true });
      cy.get('[data-cy=edit]').eq(1).click({ force: true });
      cy.url().should('include', 'http://localhost:3000/Dashboard');
    })

    it('can delete students', () => {
      cy.get('[data-cy=delete]').eq(0).click({ force: true });
      cy.url().should('include', 'http://localhost:3000/Dashboard');
    })
})
