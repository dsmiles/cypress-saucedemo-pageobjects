class ProductsPage {

    // Properties

    get page() {
        return cy.get('.inventory_list');
    }

    get productList() {
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

    openProductDetails(productName) {
        this.productList.contains(productName).click();
    }

    addToCart(productName) {
        cy.log('Product name: ' + productName);
        return cy.get('.inventory_item:contains("' + productName + '") .btn_primary.btn_inventory').click();
    }

    removeFromCart(productName) {
        cy.log('Product name: ' + productName);
        cy.get('.inventory_item:contains("' + productName + '") .btn_secondary.btn_inventory').click();
    }
}

export default new ProductsPage;
