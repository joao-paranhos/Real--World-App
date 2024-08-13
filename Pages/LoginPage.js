class LoginPage{

    ListaSeletores(){

        const Seletores = {

            Usuario: "#username",
            Senha: "#password",
            Botaologin: "button"
        }

        return Seletores
    }


    FazendoLogin(usuario, senha) {
        if (usuario) {
            cy.get(this.ListaSeletores().Usuario).type(usuario)
        }
        if (senha) {
            cy.get(this.ListaSeletores().Senha).type(senha)
        }
    }
    



    BotaoLogin(){
        cy.get(this.ListaSeletores().Botaologin).click()}


    Botaohabilitado(){

        cy.get('button').should('have.css','color','rgb(255, 255, 255)')
        cy.get('button').should('have.css','background-color','rgb(63, 81, 181)')}


    BotaoDesabilitado(){

        cy.get('button').should('have.css', 'color', 'rgba(0, 0, 0, 0.26)')
        cy.get('button').should('have.css','background-color', 'rgba(0, 0, 0, 0.12)')
        cy.get('button').should('be.disabled')}

    MensagemLoginIncorreto(){

        cy.contains('Username or password is invalid').should('be.visible')}
    

}





export default LoginPage