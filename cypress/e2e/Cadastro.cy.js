import LoginPage from '/Pages/LoginPage'
import CadastroPage from '../../Pages/CadastroPage'
import Cadastro from '../fixtures/Usuarios/Cadastro.json'
const dadoscadastro =  Cadastro
const loginpage = new LoginPage()
const cadastropage = new CadastroPage()
const Chance = require ('chance')
const chance = new Chance()

describe('template spec', () => {

  beforeEach('Visitando o Site antes de realizar o teste',()=>{

    cy.visit('http://localhost:3000/')

  })
  it('Nesse teste iremos cadastrar um usuário de forma correta e depois fazer login com esse usuário', () => {

    
    cadastropage.PaginaCadastro()
    cadastropage.PrimeiroNome(dadoscadastro.Cadastro.PrimeiroNome)
    cadastropage.SegundoNome(dadoscadastro.Cadastro.SegundoNome)
    cadastropage.Username(dadoscadastro.Cadastro.Username)
    cadastropage.Senha(dadoscadastro.Cadastro.Senha)
    cadastropage.confirmacaoSenha(dadoscadastro.Cadastro.Senha)
    cadastropage.ValidacaoBotaoHabilitado()
    cadastropage.Cadastrando()
    cy.location('pathname').should('equal','/signin')
    loginpage.FazendoLogin(dadoscadastro.Cadastro.Username,dadoscadastro.Cadastro.Senha)
    loginpage.Botaohabilitado()
    loginpage.BotaoLogin()

  })

  it('Cadastrar sem colocar o primeiro nome',()=>{

    cadastropage.PaginaCadastro()
    cadastropage.SegundoNome(Cadastro.Cadastro.SegundoNome)
    cadastropage.Username(Cadastro.Cadastro.Username)
    cadastropage.Senha(Cadastro.Cadastro.Senha)
    cadastropage.confirmacaoSenha(Cadastro.Cadastro.ConfirmacaoSenha)
    cadastropage.ValidacaoBotaoDesabilitado()
    

  })

  it('Iremos realizar um teste de cadastro sem colocar o último nome',() =>{

    cadastropage.PaginaCadastro()
    cadastropage.SegundoNome(Cadastro.Cadastro.SegundoNome)
    cadastropage.Username(Cadastro.Cadastro.Username)
    cadastropage.Senha(Cadastro.Cadastro.Senha)
    cadastropage.confirmacaoSenha(Cadastro.Cadastro.ConfirmacaoSenha)
    cadastropage.ValidacaoBotaoDesabilitado()
  })

  it('Cadastrar sem colocar o nome de usuário',()=>{

    cadastropage.PaginaCadastro()
    cadastropage.PrimeiroNome(Cadastro.Cadastro.PrimeiroNome)
    cadastropage.Senha(Cadastro.Cadastro.Senha)
    cadastropage.confirmacaoSenha(Cadastro.Cadastro.ConfirmacaoSenha)
    cadastropage.ValidacaoBotaoDesabilitado()

  })

  it('Cadastrar sem colocar senha e nem confirmação de senha',()=>{

    cadastropage.PaginaCadastro()
    cadastropage.PrimeiroNome(Cadastro.Cadastro.PrimeiroNome)
    cadastropage.SegundoNome(Cadastro.Cadastro.SegundoNome)
    cadastropage.Username(Cadastro.Cadastro.Username)
    cadastropage.ValidacaoBotaoDesabilitado()
    

  })


  it('Cadastrar sem a confirmação de senha',()=>{

    cadastropage.PaginaCadastro()
    cadastropage.PrimeiroNome(Cadastro.Cadastro.PrimeiroNome)
    cadastropage.SegundoNome(Cadastro.Cadastro.SegundoNome)
    cadastropage.Username(Cadastro.Cadastro.Username)
    cadastropage.Senha(Cadastro.Cadastro.Senha)
    cadastropage.ValidacaoBotaoDesabilitado()

  })

  it('Cadastrar sem colocar a senha, mas colocando a confirmação',()=>{

    cadastropage.PaginaCadastro()
    cadastropage.PrimeiroNome(Cadastro.Cadastro.PrimeiroNome)
    cadastropage.SegundoNome(Cadastro.Cadastro.SegundoNome)
    cadastropage.Username(Cadastro.Cadastro.Username)
    cadastropage.confirmacaoSenha(Cadastro.Cadastro.ConfirmacaoSenha)
    cadastropage.ValidacaoBotaoDesabilitado()
    })
})
