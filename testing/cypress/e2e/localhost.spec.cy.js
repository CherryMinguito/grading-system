describe('Login', () => {
  it('logs in a user', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('man@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#submitBtn').click()
    cy.url().should('include', '/home')
  })
})