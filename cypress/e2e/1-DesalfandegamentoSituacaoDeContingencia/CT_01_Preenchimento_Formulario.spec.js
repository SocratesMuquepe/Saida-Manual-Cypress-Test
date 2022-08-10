describe('Login', () => {

    beforeEach(() => {
        cy.visit('http://camuine06.minfin.gov.ao/saida-manual/')
    })
    it('Preencher Nota - Modal Maritimo', () => {

        cy.get('input[formcontrolname="utilizador"]').type('socrates.muquepe');
        cy.get('input[formcontrolname="senha"]').type('JoaoPaulo2027#');
        cy.get('button[type="submit"]').click();

        cy.wait(8000)

        cy.contains('Nova Nota').click()

        cy.get('input[formcontrolname="despachanteNumeroCedula"]').type('00001{home}');
        cy.get('input[formcontrolname="despachanteNome"]').focus()
        cy.get('input[formcontrolname="despachanteNome"]').invoke('val').should('be.equals', 'Administração Geral Tributária')
        cy.get('input[formcontrolname="destinatarioNif"]').type('50004188');
        cy.get('input[formcontrolname="destinatarioNome"]').type('MINISTARIO DOS TRANSPORTES');


        cy.get('input[formcontrolname="exportador"]').type('LEON RAILS, LCC');
        // cy.get('input[formcontrolname="referenciaRegistoDU"]').type('2456855698');
        cy.get('input[formcontrolname="referenciaLiquidacao"]').type('L200255');


        cy.get('input[formcontrolname="manifesto"]').type('2022-10225');
        cy.get('input[formcontrolname="documentoTransporte"]').type('11100005200');
        cy.get('input[formcontrolname="numeroLicenciamento"]').type('162562');

        cy.get('input[formcontrolname="contentor"]').type('HJUYY85656C');

        cy.get('.col-md-2.ng-star-inserted > .p-element > .p-dropdown').click()
        cy.get(':nth-child(1) > .p-ripple').click()

        cy.get('input[formcontrolname="quantidade"]').type('36');

        cy.get('.p-inputnumber > .p-inputtext').focus()
        cy.get('.p-inputnumber > .p-inputtext').type('{home}3525');

        cy.contains('span', 'Adicionar').click()

        cy.contains('span', 'Emitir').click()

        cy.contains('button', 'Não').click()

    })




})