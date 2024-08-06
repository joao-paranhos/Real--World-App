const Chance = require ('chance')
const chance = new Chance()
describe('template spec', () => {

  beforeEach('Visitando o Site antes de realizar o teste',()=>{

    cy.visit('http://localhost:3000/')

  })
  it('Nesse teste iremos cadastrar um usuário de forma correta', () => {

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#lastName').type(chance.last())
    cy.get('#username').type(chance.twitter())
    cy.get('#password').type(123456)
    cy.get('#confirmPassword').type(123456)
    cy.get('button').should('have.css','color','rgb(255, 255, 255)')
    cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
    cy.get('button').click()
    cy.location('pathname').should('equal','/signin')
  })

  it('Cadastrar sem colocar o primeiro nome',()=>{

    cy.get("[data-test='signup']").click()
    cy.get('#lastName').type(chance.last())
    cy.get('#username').type(chance.twitter())
    cy.get('#password').type(123456)
    cy.get('#confirmPassword').type(123456)
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
    cy.get('button').should('be.disabled')

  })

  it('Iremos realizar um teste de cadastro sem colocar o último nome',() =>{

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#username').type(chance.first())
    cy.get('#password').type(123456)
    cy.get('#confirmPassword').type(123456)
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
  })

  it('Cadastrar sem colocar o nome de usuário',()=>{

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#lastName').type(chance.last())
    cy.get('#password').type(123456)
    cy.get('#confirmPassword').type(123456)
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')

  })

  it('Cadastrar sem colocar senha e nem confirmação de senha',()=>{

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#lastName').type(chance.last())
    cy.get('#username').type(chance.twitter())
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
    

  })


  it('Cadastrar sem a confirmação de senha',()=>{

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#lastName').type(chance.last())
    cy.get('#username').type(chance.twitter())
    cy.get('#password').type(123456)
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
    

  
    

  })

  it('Cadastrar sem colocar a senha, mas colocando a confirmação',()=>{

    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(chance.first())
    cy.get('#lastName').type(chance.last())
    cy.get('#username').type(chance.twitter())
    cy.get('#confirmPassword').type(123456)
    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
    

    
  })
})
