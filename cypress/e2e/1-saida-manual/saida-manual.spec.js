describe('Login', () => {

    beforeEach(() => {
        cy.visit('http://camuine06.minfin.gov.ao/saida-manual/')
    })

    it('Verifica o login', () => {      
        cy.get('input[formcontrolname="utilizador"]').type('socrates.muquepe');
        cy.get('input[formcontrolname="senha"]').type('JoaoPaulo2027#');
        cy.get('button[type="submit"]').click();

    })




})