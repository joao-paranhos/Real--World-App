const Chance = require ('chance')
const chance = new Chance()

describe('Iremos testar todos os cenarios atuais de login',()=>{

beforeEach(() => {
    cy.visit('http://localhost:3000/')
});
    it('Nesse cenário iremos cadastrar o usuário de forma correta',()=> {

        
        cy.get('#username').type('Heath93')
        cy.get('#password').type('s3cret')
        cy.get('button').click()
        cy.get('.MuiContainer-maxWidthMd').should('be.visible')

    })

    it('Nesse cenário iremos cadastrar um isuário inválido, usando uma senha inexistente e um usuario inexistente',()=>{
        cy.get('#username').type(chance.first())
        cy.get('#password').type(chance.ssn({ dashes: false }))
        cy.get('button').click()
        cy.contains('Username or password is invalid').should('be.visible')
        

    })
    it.only('Nesse cenário iremos cadastrar um isuário válido, usando uma senha inválido com menos de 4 caracteres',()=>{

        cy.get('#username').type('Heath93')
        cy.get('#password').type(123)
        cy.get('button').should('have.css','rgba(0, 0, 0, 0,26)')
        

        
    })

    it ('',() =>{


    })
    
})