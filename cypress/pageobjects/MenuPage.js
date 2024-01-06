class MenuPage {

    get menuButton() {
        return cy.get('#react-burger-menu-btn')
    }

    get productsButtons() {
        return cy.get('#inventory_sidebar_link');
    }

    get aboutButton() {
        return cy.get('#about_sidebar_link');
    }

    get logoutButton() {
        return cy.get('#logout_sidebar_link');
    }

    get resetButton() {
        return cy.get('#reset_sidebar_link');
    }

    open() {
        this.menuButton.click();
    }

    openProductsPage() {
        this.productsButtons.click();
    }

    openAboutPage() {
        this.aboutButton.click();
    }

    logout() {
        this.logoutButton.click();
    }

    resetAppState() {
        this.resetButton.click();
    }
}

export default new MenuPage();
