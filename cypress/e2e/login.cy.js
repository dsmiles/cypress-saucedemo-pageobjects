/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";

describe ('LoginPage', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
    })

    it('should be able to test loading of login page', () => {
        LoginPage.page.should('be.visible');
    });

    it.only('should be able to login with a standard user', () => {
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');
    });

    it('should not be able to login with a locked user', () => {
        LoginPage.logIn("locked_out_user", "secret_sauce");
        LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
    });

    // TODO add additional scenarios - invalid username, password, etc
});