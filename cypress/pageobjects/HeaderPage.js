class HeaderPage {

    get page() {
        return cy.get('#header_container');
    }

    get cart() {
        return cy.get('.shopping_cart_link');
    }

    /**
     * Open the shopping cart
     */
    openCart() {
        this.cart.click();
    }
}

export default new HeaderPage();