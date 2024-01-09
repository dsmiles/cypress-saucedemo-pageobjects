/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import ProductDetailsPage from "../pageobjects/ProductDetailsPage";
import HeaderPage from "../pageobjects/HeaderPage";

describe('Product details page', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');
    })

    it('go back to the products page', () => {
        ProductsPage.openProductDetails('Sauce Labs Bike Light');
        ProductDetailsPage.page.should('be.visible');
        ProductDetailsPage.backToProducts();
        ProductDetailsPage.page.should('not.exist');
    })

    it('add a product to the cart', () => {
        ProductsPage.openProductDetails('Sauce Labs Bike Light');
        ProductDetailsPage.page.should('be.visible');

        HeaderPage.cart.should('have.text', '');
        ProductDetailsPage.addToCart();
        HeaderPage.cart.should('have.text', '1');

        ProductDetailsPage.addButton.should('not.exist');
        ProductDetailsPage.removeButton.should('be.visible');
    })

    it('remove a product from the cart', () => {
        ProductsPage.openProductDetails('Sauce Labs Bike Light');
        ProductDetailsPage.page.should('be.visible');
        ProductDetailsPage.addToCart();

        HeaderPage.cart.should('have.text', '1');
        ProductDetailsPage.removeFromCart();
        HeaderPage.cart.should('have.text', '');

        ProductDetailsPage.addButton.should('be.visible');
        ProductDetailsPage.removeButton.should('not.exist');
    })
})
