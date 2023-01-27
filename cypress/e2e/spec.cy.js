/*describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})*/

describe('Grading System Test', () => {
  
  it('can enter email address and password', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=email]').type('kencosep19@gmail.com');
    cy.get('[data-cy=password]').type('1234');
    cy.get('[data-cy=login]').click();
    cy.url().should('include', 'http://localhost:3000/Home');
  })

  /*beforeEach(() => {
    cy.visit('http://localhost:3000/Sidebar');
  })*/

  it('tests the dashboard page', () => {
    cy.get('[data-cy=dashboard]').click();

  it('tests the students page', () => {
    cy.get('[data-cy=students]').click();
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/Students');
  })

  it('can add new students', () => {
    cy.get('[data-cy=add]').eq(0).click();
    cy.get('[data-cy=firstname]').eq(0).type('Kenneth', {force: true });
    cy.get('[data-cy=lastname]').eq(0).type('Cosep', {force: true });
    cy.get('[data-cy=course]').eq(0).type('BSIT', {force: true });
    cy.get('[data-cy=address]').eq(0).type('Gun-ob, Lapu-Lapu City', {force: true });
    cy.get('[data-cy=addstud]').eq(1).click({force: true });
    cy.url().should('include', 'http://localhost:3000/Students');
  })

  it('can edit the details', () => {
    cy.get('[data-cy=edit]').eq(0).click({force: true });
    cy.get('[data-cy=edit-fname]').eq(0).type('Ken', {force: true });
    cy.get('[data-cy=edit-lname]').eq(0).type('Neth', {force: true });
    cy.get('[data-cy=edit-course]').eq(0).type('BA-FDC', {force: true });
    cy.get('[data-cy=edit-address]').eq(0).type('Cebu City', {force: true });
    cy.get('[data-cy=edit]').eq(1).click({force: true });
    cy.url().should('include', 'http://localhost:3000/Students');
  })

  it('can delete students', () => {
    cy.get('[data-cy=delete]').eq(0).click({force: true });
    cy.url().should('include', 'http://localhost:3000/Students');
  })

});