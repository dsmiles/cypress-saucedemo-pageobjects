/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import {LOCKED_USER, STANDARD_USER} from "../support/constants/Users";

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
        it('redirects to products page', () => {
            LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD)
            ProductsPage.page.should('be.visible');
        })
    })

    context('given INVALID user credentials', () => {
        it('shows login error', () => {
            LoginPage.logIn(LOCKED_USER.USERNAME, LOCKED_USER.PASSWORD);
            LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
        })
    })

    // TODO add additional scenarios - invalid username, password, etc
});