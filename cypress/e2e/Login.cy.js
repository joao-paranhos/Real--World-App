const Chance = require ('chance')
const chance = new Chance()

describe('Iremos testar todos os cenarios atuais de login',()=>{

beforeEach(() => {
    cy.visit('http://localhost:3000/')
});
    it('Nesse cenário iremos logar  como um usuário de forma correta e validar a cor do botão de login',()=> {

        cy.get('#username').type('Heath93')
        cy.get('#password').type('s3cret')
        cy.get('button').should('have.css','color','rgb(255, 255, 255)')
        cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
        cy.get('button').click()
        cy.get('.MuiContainer-maxWidthMd').should('be.visible')

    })

    it('Nesse cenário iremos tentar logar usando uma senha inexistente mas que seja valida e um usuario inexistente',()=>{
        cy.get('#username').type(chance.first())
        cy.get('#password').type(chance.ssn({ dashes: false }))
        cy.get('button').should('have.css','color','rgb(255, 255, 255)')
        cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
        cy.get('button').click()
        cy.contains('Username or password is invalid').should('be.visible')})



    it('Tentativa de login com usuário válido e senha inválida mas que esteja dentro do nosso padrão com 4 ou mais caracteres',()=>{

        cy.get('#username').type('Heath93')
        cy.get('#password').type(1234)
        cy.get('button').should('have.css','color','rgb(255, 255, 255)')
        cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
        cy.get('button').click()
        cy.contains('Username or password is invalid').should('be.visible')})
        

    
    it('Nesse cenário iremos colocar um usuário válido, usando uma senha inválido com menos de 4 caracteres para verificar se o nosso botão ficará na cor cinza e desabilitado',()=>{

        cy.get('#username').type('Heath93')
        cy.get('#password').type(123)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})

    it('Iremos testar se ao preencher somente a senha, para verificar se nosso botão fica cinza e desabilitado',() =>{
        
        cy.get('#password').type('s3cret')
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})
    
    it('Iremos testar se ao preencher somente o campo de usuario, para verificar se o nosso botão fica cinza e desabilitado',() =>{
        
        cy.get('#username').type('Heath93')
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})

    })