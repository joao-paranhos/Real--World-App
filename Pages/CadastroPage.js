class CadastroPage{

    ListaSeletores(){

        const Seletores = {
            PaginaCadastro: "[data-test='signup']",
            Nome: "#firstName",
            Sobrenome: "#lastName",
            Username: "#username",
            Senha: "#password",
            confirmarSenha: "#confirmPassword",
            BotaoCadastro: "button"}

            return Seletores
    }
    PaginaCadastro(){

        cy.get(this.ListaSeletores().PaginaCadastro).click()

    }
    PrimeiroNome(PrimeiroNome){
        cy.get(this.ListaSeletores().Nome).type(PrimeiroNome)
    }

    SegundoNome(SegundoNome){
        cy.get(this.ListaSeletores().Sobrenome).type(SegundoNome)
    }

    Username(Username){
        cy.get(this.ListaSeletores().Username).type(Username)
    }

    Senha(Senha){
        cy.get(this.ListaSeletores().Senha).type(Senha)
        
    }

    confirmacaoSenha(Confirmacao){http://localhost:3000/__/#/debug
        cy.get(this.ListaSeletores().confirmarSenha).type(Confirmacao)
    }
    
    Cadastrando(){
        cy.get(this.ListaSeletores().BotaoCadastro).click()
    }

    ValidacaoBotaoHabilitado()
    {
    cy.get('button').should('have.css','color','rgb(255, 255, 255)')
    cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')
    }

    ValidacaoBotaoDesabilitado(){

    cy.get('button').should('have.css','color','rgba(0, 0, 0, 0.26)')
    cy.get('button').should('have.css','background-color','rgba(0, 0, 0, 0.12)')
    cy.get('button').should('be.disabled')
    }
}

export default CadastroPage