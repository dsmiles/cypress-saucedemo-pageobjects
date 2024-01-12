class CheckoutInfoPage {

    get page() {
        return cy.get('#checkout_info_container');
    }
}

export default new CheckoutInfoPage();