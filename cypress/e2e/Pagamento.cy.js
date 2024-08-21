import LoginPage from '/Pages/LoginPage'
import usuarios from '../fixtures/Usuarios/Login.json'
const loginpage = new LoginPage()

describe('',()=>{

    beforeEach('',()=>{

        cy.visit('http://localhost:3000/')
        loginpage.FazendoLogin(usuarios.Login_sucesso.Usuario,usuarios.Login_sucesso.Senha)
        loginpage.BotaoLogin()


    })

    it('Iremos fazer o pagamento com um valor que temos em conta',()=>{

        cy.get('.MuiButton-contained').click()
        cy.get('.MuiListItem-gutters').eq(5).click()
        cy.get('.MuiFormControl-fullWidth').eq(0).type('509.53')
        

    
        

    })
})