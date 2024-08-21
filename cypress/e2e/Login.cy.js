import usuario from '../fixtures/Usuarios/Login.json' 
import LoginPage from '/Pages/LoginPage'

const loginpage = new LoginPage()

const Chance = require ('chance')
const chance = new Chance()

describe('Iremos testar todos os cenarios atuais de login',()=>{

beforeEach(() => {
    cy.visit('localhost:3000/signin')
});
    it('Nesse cenário iremos logar  como um usuário de forma correta e validar a cor do botão de login',()=> {

        loginpage.FazendoLogin(usuario.Login_sucesso.Usuario,usuario.Login_sucesso.Senha)
        loginpage.Botaohabilitado()
        loginpage.BotaoLogin()
    })

    it('Nesse cenário iremos tentar logar usando uma senha inexistente mas que seja valida e um usuario inexistente',()=>{
        loginpage.FazendoLogin(chance.first(),chance.ssn({ dashes: false }))
        loginpage.Botaohabilitado()
        loginpage.BotaoLogin()
        loginpage.MensagemLoginIncorreto()})

    it('Tentativa de login com usuário válido e senha inválida mas que esteja dentro do nosso padrão com 4 ou mais caracteres',()=>{

        
        loginpage.FazendoLogin(usuario.Login_sucesso.Usuario,usuario.Login_incorreto.Senha)
        loginpage.Botaohabilitado()
        loginpage.BotaoLogin()
        loginpage.MensagemLoginIncorreto()})
        
        

    
    it('Nesse cenário iremos colocar um usuário válido, usando uma senha inválido com menos de 4 caracteres para verificar se o nosso botão ficará na cor cinza e desabilitado',()=>{

        loginpage.FazendoLogin(usuario.Login_sucesso.Usuario,usuario.Login_incorreto.Senha_3_caracteres)
        loginpage.BotaoDesabilitado()
    
    })

    it('Iremos testar se ao preencher somente a senha, para verificar se nosso botão fica cinza e desabilitado',() =>{
        
        loginpage.FazendoLogin(undefined, usuario.Login_sucesso.Senha)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')

        cy.get('button').should('be.disabled')})
    
    it('Iremos testar se ao preencher somente o campo de usuario, para verificar se o nosso botão fica cinza e desabilitado',() =>{
        
        cy.get('#username').type(usuario.Login_sucesso.Usuario,undefined)
        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
        cy.get('button').should('be.disabled')})

    })

