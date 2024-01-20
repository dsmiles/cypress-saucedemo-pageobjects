class CheckoutOverviewPage {

    get page() {
        return cy.get('#checkout_summary_container');
    }

    get items() {
        return cy.get('.cart_item')
    }

    get itemName() {
        return cy.get('.inventory_item_name');
    }

    get itemDescription() {
        return cy.get('.inventory_item_desc');
    }

    get itemPrice() {
        return cy.get('.inventory_item_price');
    }

    get cancelButton() {
        return cy.dataTest('cancel');
    }

    get finishButton() {
        return cy.dataTest('finish');
    }

    /**
     * Cancel the checkout process
     */
    cancelCheckout() {
        this.cancelButton.click();
    }

    /**
     * Finished the checkout process
     */
    finishCheckout() {
        this.finishButton.click();
    }
}

export default new CheckoutOverviewPage();
