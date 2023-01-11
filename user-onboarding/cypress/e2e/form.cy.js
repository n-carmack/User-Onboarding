describe('tests', function() {
    it('Checks for name', function(){
        cy.visit("http://localhost:3000/")
        cy.get('input[name="username"]')
            .type('John Doe')
            .should('have.value','John Doe')

        cy.get('input[name="email"]')
            .type('fake@email')
            .should('have.value','fake@email')    
        
        cy.get('input[name="password"]')
            .type('pAssword1234')
            .should('have.value','pAssword1234')
            
        cy.get('input[name="tos"]')
            .click('')
        
        cy.get('input[type="submit"]')
            .click('')
    })
})