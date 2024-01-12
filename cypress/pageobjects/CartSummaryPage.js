class CartSummaryPage {

    // Properties

    get page() {
        return cy.get('#cart_contents_container');
    }

    get items() {
        return cy.get('.cart_item');
    }

    get itemName() {
        return cy.get('.inventory_item_name');
    }

    get itemPrice() {
        return cy.get('.inventory_item_price');
    }

    get removeButton() {
        return cy.get('.btn_secondary.cart_button');
    }

    get continueButton() {
        return cy.dataTest('continue-shopping')
    }

    get checkoutButton() {
        return cy.dataTest('checkout');
    }

    removeFromCart(productName) {
        cy.log('Product name: ' + productName);
        cy.get('.cart_item:contains("' + productName + '") .btn_secondary.cart_button').click();
    }

    continueShopping() {
        this.continueButton.click();
    }

    goToCheckout() {
        this.checkoutButton.click();
    }
}

export default new CartSummaryPage();
