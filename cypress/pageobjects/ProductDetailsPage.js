class ProductDetailsPage {

    // Properties

    get page() {
        return cy.get('#inventory_item_container');
    }

    get name() {
        return cy.get('.inventory_details_name');
    }

    get description() {
        return cy.get('.inventory_details_desc')
    }

    get price() {
        return cy.get('.inventory_details_price')
    }

    get backButton() {
        return cy.dataTest('back-to-products');
        //return cy.get('.inventory_details_back_button');
    }

    get addButton() {
        return cy.get('.btn_primary.btn_inventory')
    }

    get removeButton() {
        return cy.get('.btn_secondary.btn_inventory')
    }

    // Methods

    addToCart() {
        this.addButton.click();
    }

    removeFromCart() {
        this.removeButton.click();
    }

    goBack() {
        this.backButton.click();
    }
}

export default new ProductDetailsPage();