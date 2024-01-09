/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import ProductDetailsPage from "../pageobjects/ProductDetailsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import CartSummaryPage from "../pageobjects/CartSummaryPage";

describe('Product overview page', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');
    })

    it('all products displayed with expected state', () => {
        ProductsPage.productList.should('have.length', 6);
        ProductsPage.addButton.should('be.visible').should('have.length', 6);
        ProductsPage.removeButton.should('not.exist');
    });

    it('product details can be opened', () => {
        ProductsPage.openProductDetails('Sauce Labs Bike Light');
        ProductDetailsPage.page.should('be.visible');
        ProductDetailsPage.page.contains('Sauce Labs Bike Light')
    })

    it('add a product to the cart', () => {
        HeaderPage.cart.should('have.text', '');
        ProductsPage.addToCart('Sauce Labs Backpack');
        HeaderPage.cart.should('have.text', '1');
        ProductsPage.addButton.should('be.visible').should('have.length', 5);
        ProductsPage.removeButton.should('be.visible').should('have.length', 1);
    })

    it('remove a product from the cart', () => {
        ProductsPage.addToCart('Sauce Labs Backpack');
        HeaderPage.cart.should('have.text', '1');
        ProductsPage.removeFromCart('Sauce Labs Backpack')
        HeaderPage.cart.should('have.text', '');
        ProductsPage.addButton.should('be.visible').should('have.length', 6);
        ProductsPage.removeButton.should('not.exist')
    })

    it('open the cart summary page', () => {
        HeaderPage.openCart();
        CartSummaryPage.page.should('be.visible');
    })
})
