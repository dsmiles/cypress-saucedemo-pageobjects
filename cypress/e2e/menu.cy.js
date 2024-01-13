/// <reference types="cypress" />

import MenuPage from "../pageobjects/MenuPage";
import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";

describe('Menu', () => {
    beforeEach(() => {
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');
        MenuPage.open();
    });

    it('open the products page', () => {
        MenuPage.openProductsPage();
        ProductsPage.page.should('be.visible');
    });

    it('open the about page', () => {
      MenuPage.openAboutPage();
      // TODO check the expected page
    });

    it('log out', () => {
        MenuPage.logout();
        LoginPage.page.should('be.visible');
    });

    it('clear the cart', () => {
        MenuPage.resetAppState();
        // TODO check the state
    });
})
