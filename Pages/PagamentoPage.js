class PagamentoPage{
    
    ListaSeletores(){

        const Seletores = {

            NovoPagamento: ".MuiButton-contained",
            SelecionandoPessoa: ".MuiListItem-gutters",
            ValorTransferencia: ".MuiOutlinedInput-input",
            BotaoPagamento: ".MuiButton-fullWidth",
            ObservacaoTransferencia: ".MuiOutlinedInput-input"
        }
    return Seletores
}

PagamentoComSaldo(){
    cy.get(this.ListaSeletores().NovoPagamento).click()
    cy.get(this.ListaSeletores().SelecionandoPessoa).eq(5).click()
    cy.get(this.ListaSeletores().ValorTransferencia).eq(0).type(509.53).should('have.value','$509.53')
    cy.get(this.ListaSeletores().ObservacaoTransferencia).eq(1).type('Pagamento Teste')
    cy.get(this.ListaSeletores().BotaoPagamento).eq(1).click()
}

ValidandoTransferencia(){
    cy.contains('Transaction Submitted!').should('be.visible')
}
PagamentoSemSaldo(){
    cy.get(this.ListaSeletores().NovoPagamento).click()
    cy.get(this.ListaSeletores().SelecionandoPessoa).eq(5).click()
    cy.get(this.ListaSeletores().ValorTransferencia).eq(0).type('10,000,000').should('have.value','$10,000,000')
    cy.get(this.ListaSeletores().ObservacaoTransferencia).eq(1).type('Pagamento Teste')
    cy.get(this.ListaSeletores().BotaoPagamento).eq(1).click() 
}
}

export default PagamentoPage