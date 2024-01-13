/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";

describe ('LoginPage', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should be able to test loading of login page', () => {
        LoginPage.page.should('be.visible');
        LoginPage.username.should('be.visible');
        LoginPage.password.should('be.visible');
        LoginPage.loginButton.should('be.visible');
    })

    context('given valid user credentials', () => {
        it.only('redirects to products page', () => {
            LoginPage.logIn("standard_user", "secret_sauce")
            ProductsPage.page.should('be.visible');
        })
    })

    context('given INVALID user credentials', () => {
        it('shows login error', () => {
            LoginPage.logIn("locked_out_user", "secret_sauce");
            LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
        })
    })

    // TODO add additional scenarios - invalid username, password, etc
});