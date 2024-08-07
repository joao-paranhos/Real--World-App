import usuario from '../fixtures/Usuarios/Login.json' 
const Chance = require ('chance')
const chance = new Chance()

describe('Iremos testar todos os cenarios atuais de login',()=>{

beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
});
    it('Nesse cenário iremos logar  como um usuário de forma correta e validar a cor do botão de login',()=> {

        cy.get('#username').type(usuario.Login_sucesso.Usuario)
        cy.get('#password').type(usuario.Login_sucesso.Senha)
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

        cy.get('#username').type(usuario.Login_sucesso.Usuario)
        cy.get('#password').type(usuario.Login_incorreto.Senha)
        cy.get('button').should('have.css','color','rgb(255, 255, 255)')
        cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
        cy.get('button').click()
        cy.contains('Username or password is invalid').should('be.visible')})
        

    
    it('Nesse cenário iremos colocar um usuário válido, usando uma senha inválido com menos de 4 caracteres para verificar se o nosso botão ficará na cor cinza e desabilitado',()=>{

        cy.get('#username').type(usuario.Login_sucesso.Usuario)
        cy.get('#password').type(usuario.Login_incorreto.Senha_3_caracteres)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})

    it('Iremos testar se ao preencher somente a senha, para verificar se nosso botão fica cinza e desabilitado',() =>{
        
        cy.get('#password').type(usuario.Login_sucesso.Senha)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})
    
    it('Iremos testar se ao preencher somente o campo de usuario, para verificar se o nosso botão fica cinza e desabilitado',() =>{
        
        cy.get('#username').type(usuario.Login_sucesso.Usuario)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('be.disabled')})

    })