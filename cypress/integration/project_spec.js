describe('Project spec', () => {
  before(() => {
    cy.visit('/');
  });

  describe('HTML', () => {
    describe('HTML .market', () => {
      it('has tag .market', () => {
        cy.get('.market');
      });
      it('has tag .new-orders__create-button', () => {
        cy.get('.new-orders__create-button');
      });
      it('has tag button with text «Send order to farm»', () => {
        cy.get('button').contains('Send order to farm');
      });
    });

    describe('HTML .farm', () => {
      it('has tag .farm', () => {
        cy.get('.farm');
      });

      it('has tag button with content «Send product to customer»', () => {
        cy.get('button').contains('Send product to customer');
      });
    });

    describe('HTML .budget', () => {
      it('has tag .budget', () => {
        cy.get('.budget');
      });

      it('has tag p with content «Total sum of money»', () => {
        cy.get('.budget p').contains('Total sum of money');
      });
      it('has tag p with content «Spent on sellers»', () => {
        cy.get('.budget p').contains('Spent on sellers');
      });
      it('has tag p with content «Spent on farm»', () => {
        cy.get('.budget p').contains('Spent on farm');
      });
      it('has tag p with content «Spent on delivery»', () => {
        cy.get('.budget p').contains('Spent on delivery');
      });
      it('has tag p with content «Total»', () => {
        cy.get('.budget p').contains('Total');
      });
    });
    it('has tag .App', () => {
      cy.get('.App');
    });
  });

  describe('Scenario', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('Create new order', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.market .order-list .order').should('have.length', 2);
    });
    it('create 3 orders', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.market .order-list .order').should('have.length', 6);
    });
    it('create 1 order and send order to farm', () => {
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy.get('.market .order-list .order').should('have.length', 0);
      cy.get('.farm .order').should('have.length', 2);
    });
    it('create 3 orders and send order to farm', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy.get('.market .order-list .order').should('have.length', 0);
      cy.get('.farm .order').should('have.length', 6);
    });

    it('create 1 order and send product to customer', () => {
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy.get('.farm .order').should('have.length', 0);
    });

    it('create 3 orders and send product to customer', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy.get('.farm .order').should('have.length', 0);
    });
  });

  describe('Scenario: New orders on market', () => {
    before(() => {
      cy.visit('/');
      cy.get('.new-orders__create-button').click();
    });
    it(`has total sum of orders in "Total sum of money"`, () => {
      cy.get('.market .order-list .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('"Spent on sellers" equal -20', () => {
      cy.get('.t-sellers').then($el => {
        const sellers = parseInt($el.text(), 10);
        expect(sellers).to.eq(-20);
      });
    });
    it('"Spent on farm" equal -20', () => {
      cy.get('.t-farm').then($el => {
        const farm = parseInt($el.text(), 10);
        expect(farm).to.eq(-20);
      });
    });
    it('«Total» equal "Total sum of money" minus "Spent on sellers"', () => {
      cy.get('.market .order-list .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-total').then($el => {
          const total = parseInt($el.text(), 10);
          expect(total).to.eq(orderPrice - 20);
        });
      });
    });
  });

  describe('Scenario: Send order to farm', () => {
    before(() => {
      cy.visit('/');
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
    });
    it('has order`s money in «Total sum of money»', () => {
      cy.get('.farm .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('Spent on sellers equal -20', () => {
      cy.get('.t-sellers').then($el => {
        const sellers = parseInt($el.text(), 10);
        expect(sellers).to.eq(-20);
      });
    });
    it('Spent on farm equal -100', () => {
      cy.get('.t-farm').then($el => {
        const farm = parseInt($el.text(), 10);
        expect(farm).to.eq(-100);
      });
    });
    it('has «Total» equal "Total sum of money" minus "Spent on sellers", minus "Spent on farm"', () => {
      cy.get('.farm .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-total').then($el => {
          const total = parseInt($el.text(), 10);
          expect(total).to.eq(orderPrice - 20 - 100);
        });
      });
    });
  });
  describe('Scenario: Send product to customer', () => {
    before(() => {
      cy.visit('/');
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send order to farm')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
      cy
        .get('button')
        .contains('Send product to customer')
        .click();
    });
    it('«Total» = "Total sum of money" minus spendings', () => {
      cy.get('.t-total').then($el => {
        const total = parseInt($el.text(), 10);

        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);

          cy.get('.t-sellers').then($el => {
            const sellers = parseInt($el.text(), 10);
            cy.get('.t-farm').then($el => {
              const farm = parseInt($el.text(), 10);
              cy.get('.t-delivery').then($el => {
                const delivery = parseInt($el.text(), 10);

                expect(total).to.eq(profit + sellers + farm + delivery);
              });
            });
          });
        });
      });
    });
  });
});
