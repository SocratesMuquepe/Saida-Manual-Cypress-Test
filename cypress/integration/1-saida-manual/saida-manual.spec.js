describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('http://camuine06.minfin.gov.ao/saida-manual/')
    })

    it('Verifica o login', () => {      
        cy.get('input[formcontrolname="utilizador"]').type('gualter.sebastiao');
        cy.get('input[formcontrolname="senha"]').type('Gproducoes20222');
        cy.get('button[type="submit"]').click();

    })




})