describe('Route, Login, HOC', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    describe('HTML', () => {
        it('has tag nav', () => {
            cy.get('nav');
        });
        it('has a link /login', () => {
            cy
                .get('a')
                .contains('Login')
                .should('have.attr', 'href', '/login');
        });
        it('has a link /private to `Private page`', () => {
            cy
                .get('a')
                .contains('Private page')
                .should('have.attr', 'href', '/private');
        });
        it('has a link `/` to `Home`', () => {
            cy
                .get('a')
                .contains('Home')
                .should('have.attr', 'href', '/');
        });
    });

    describe('Login scenario', () => {
        it('Unauthorized user must redirect to Login page', () => {
            cy.visit('/private');

            cy.location().should(location => {
                expect(location.pathname).to.eq('/login');
            });
        });
        it('After authorization on /login redirect to /', () => {
            cy.visit('/login');

            cy.get('input[name="email"]').type('student@example.com');
            cy.get('input[name="password"]').type('121314');
            cy.get('button').click();

            cy.location().should(location => {
                expect(location.pathname).to.eq('/');
            });
        });
        it('After authorization on /login can go to /private', () => {
            cy.visit('/login');

            cy.get('input[name="email"]').type('student@example.com');
            cy.get('input[name="password"]').type('121314');
            cy.get('button').click();

            cy
                .get('a')
                .contains('Private page')
                .click();

            cy.get('p').contains('Private page');
        });

        it('After atemped authorization on /login with wron pswd get p.error', () => {
            cy.visit('/login');

            cy.get('input[name="email"]').type('student@example.com');
            cy.get('input[name="password"]').type('worng pswd');
            cy.get('button').click();

            cy.get('p.error');
        });
    });
});
