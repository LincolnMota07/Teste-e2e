describe('Api Adopet', () => { 


 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/3f73fb34-c6d7-4278-b20c-dae80c60912b',
         headers: Cypress.env()
        }).then((res) => {
              expect(res.status).to.be.equal(200)
              expect(res.body).is.not.empty
              expect(res.body).to.have.property('msg')
        })
 })
})
