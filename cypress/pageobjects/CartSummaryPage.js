class CartSummaryPage {

    // Properties

    get page() {
        return cy.get('#cart_contents_container');
    }
}

export default new CartSummaryPage();