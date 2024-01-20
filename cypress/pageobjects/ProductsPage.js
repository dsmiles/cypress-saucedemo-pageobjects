class ProductsPage {

    // Properties

    get view() {
        return cy.get('.inventory_list');
    }

    get items() {
        return cy.get('.inventory_item');
    }

    get productName() {
        return cy.get('.inventory_item_name');
    }

    get addButton() {
        return cy.get('.btn_primary.btn_inventory');
    }

    get removeButton() {
        return cy.get('.btn_secondary.btn_inventory');
    }

    get sortMenu() {
        return cy.dataTest('product_sort_container');
    }

    // Methods

    /**
     * Open the product details page for the specified product
     * @param productName
     */
    openProductDetails(productName) {
        this.items.contains(productName).click();
    }

    /**
     * Find the specified product in the inventory and click
     * either the Add or Remove button as appropriate
     * @param productName
     * @param action
     */
    performCartAction(productName, action) {
        cy.log('Product name: ' + productName);
        cy.contains('.inventory_item', productName)
            .find(`.btn_${action.toLowerCase()}.btn_inventory`)
            .click();
    }

    /**
     * Add the specified product to the cart
     * @param productName
     */
    addToCart(productName) {
        this.performCartAction(productName, 'Primary');
    }

    /**
     * Remove the specified product from the cart
     * @param productName
     */
    removeFromCart(productName) {
        this.performCartAction(productName, 'Secondary');
    }
}

export default new ProductsPage;
