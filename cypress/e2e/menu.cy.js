/// <reference types="cypress" />

import MenuPage from "../pageobjects/MenuPage";
import LoginPage from "../pageobjects/LoginPage";

describe('Menu', () => {
    beforeEach(() => {
        MenuPage.open();
    });

    it('should be able to open the products page', () => {
        MenuPage.openProductsPage();
        // TODO Products Page should be.visible
    });

    it('should be able to open the about page', () => {
      MenuPage.openAboutPage();
      // TODO check the expected page
    });

    it('should be able to log out', () => {
        MenuPage.logout();
        LoginPage.page.should('be.visible');
    });

    it('should be able to clear the cart', () => {
        MenuPage.resetAppState();
        // TODO check the state
    });
})