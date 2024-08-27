import LoginPage from '/Pages/LoginPage'
import usuarios from '../fixtures/Usuarios/Login.json'
import PagamentoPage from '/Pages/PagamentoPage'
const loginpage = new LoginPage()
const pagamentopage = new PagamentoPage()


describe('',()=>{

    beforeEach('',()=>{

        cy.visit('http://localhost:3000/')
        loginpage.FazendoLogin(usuarios.Login_sucesso.Usuario,usuarios.Login_sucesso.Senha)
        loginpage.BotaoLogin()


    })

    it('Iremos fazer o pagamento com um valor que temos em conta',()=>{
        

        pagamentopage.PagamentoComSaldo()
        pagamentopage.ValidandoTransferencia()
        
        
    })

    it('Iremos fazer uma transação com um valor que não temos em conta. O sistema deve barrar essa ação',()=>{

        pagamentopage.PagamentoSemSaldo()
        
    })
})