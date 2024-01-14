class CheckoutCompletePage {

    get page() {
        return cy.get('#checkout_complete_container');
    }

    get title() {
        return cy.get('.header_secondary_container>.title');
    }

    get backHomeButton() {
        return cy.dataTest('back-to-products');
    }

    backToProducts() {
        this.backHomeButton.click();
    }
}

export default new CheckoutCompletePage();
