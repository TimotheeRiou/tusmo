describe('Motus App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('devrait afficher le titre du jeu', () => {
        cy.contains('h1', 'Motus').should('be.visible');
    });

    it('devrait permettre à l\'utilisateur d\'entrer un mot', () => {
        cy.get('input[type="text"]').type('HELLO');
        cy.get('button').contains('OK').click();
        cy.get('.mot').should('contain.text', 'HELLO');
    });

    it('devrait montrer le bon message quand le mot est deviné correctement', () => {
        cy.get('input[type="text"]').type('REACT');
        cy.get('button').contains('OK').click();
        cy.get('.message').should('contain.text', 'Félicitations ! Vous avez trouvé le mot !');
    });

    it('devrait montrer le bon message quand les essais sont épuisés', () => {
        const essais = ['WORDS', 'GUESS', 'MOTUS', 'RETRY', 'HELLO'];
        essais.forEach((mot) => {
            cy.get('input[type="text"]').type(mot);
            cy.get('button').contains('OK').click();
        });
        cy.get('input[type="text"]').type('FINAL');
        cy.get('button').contains('OK').click();
        cy.get('.message').should('contain.text', 'Dommage ! Vous avez épuisé tous vos essais.');
    });

    it('devrait permettre de recommencer le jeu', () => {
        cy.get('input[type="text"]').type('REACT');
        cy.get('button').contains('OK').click();
        cy.get('.message').should('contain.text', 'Félicitations ! Vous avez trouvé le mot !');
        cy.get('button').contains('Recommencer').click();
        cy.get('.message').should('not.exist');
        cy.get('.mot').should('have.length', 0);
    });
});
