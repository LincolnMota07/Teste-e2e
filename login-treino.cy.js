describe('Página de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
    })
  
    it('Usuário deve clicar na página de mensagens e ser redirecionado para aba de login, onde ele irá fazer o login', () => {
    cy.get('.header__message').click();   
    cy.login('usuario@teste.com', 'User1234');
    cy.get(`.cards`).should('be.visible')
  
    })
  })