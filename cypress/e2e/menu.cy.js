/// <reference types="cypress" />

import MenuPage from "../pageobjects/MenuPage";
import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import {STANDARD_USER} from "../support/constants/Users";

describe('Menu', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.page.should('be.visible');
        MenuPage.open();
    });

    it('open the products page', () => {
        MenuPage.openProductsPage();
        ProductsPage.page.should('be.visible');
    });

    it.skip('open the about page', () => {
      MenuPage.openAboutPage();
      ProductsPage.page.should('not.exist');
        // This option redirects the web browser to a page on a different
        // domain (https://saucelabs.com). Sometimes, the page loads and
        // sometimes it doesn't. Therefore, skipping this page until I
        // find a solution.
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
