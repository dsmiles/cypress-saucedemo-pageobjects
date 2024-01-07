class ProductsPage {

    // Properties

    isOnPage() {
        return cy.get('#inventory_container').eq(0)
    }

    get page() {
        return cy.get('.inventory_list');
    }

    get productList() {
        return cy.get('.inventory_item');
    }

    get addButton() {
        return cy.get('.btn_primary.btn_inventory');
    }

    get removeButton() {
        return cy.get('.btn_secondary.btn_inventory');
    }

    // Methods

    openProductDetails(productName) {
        this.productList.contains(productName).click();
    }

    addToCart(productName) {
        cy.log('Product name: ' + productName);

        // This works
        //cy.get('.inventory_item:contains("Sauce Labs Backpack") .btn_inventory').click();
        return cy.get('.inventory_item:contains("' + productName + '") .btn_primary.btn_inventory').click();

        // This does not work
        //
        // cy.get('.inventory_item').contains('Sauce Labs Backpack')
        //     .parent('.inventory_item')
        //     .find('.btn_inventory')
        //     .click();

        // cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
        //     .parent('.inventory_list')
        //     .find('.btn_inventory')
        //     .click();

        // cy.get('.inventory_item').contains(productName)
        //     .find('.btn_inventory').click();

        // this.productList.contains(productName)
        //     .find('.btn_primary.btn_inventory').click();
    }

    removeFromCart(productName) {
        cy.log('Product name: ' + productName);
        cy.get('.inventory_item:contains("' + productName + '") .btn_secondary.btn_inventory').click();
    }
}

export default new ProductsPage;
