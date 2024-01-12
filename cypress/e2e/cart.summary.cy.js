/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import CartSummaryPage from "../pageobjects/CartSummaryPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";

describe('Shopping cart summary', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');
    })

    it('cart shows correct details', () => {
        const productName = 'Sauce Labs Bolt T-Shirt';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        CartSummaryPage.page.should('be.visible');
        CartSummaryPage.items.should('have.length', 1);
        CartSummaryPage.itemName.should('have.text', productName);
        CartSummaryPage.itemPrice.should('have.text', "$15.99");
        HeaderPage.cart.should('have.text', '1');
    });

    it('continue shopping', () => {
        const productName = 'Sauce Labs Fleece Jacket';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        CartSummaryPage.page.should('be.visible');
        CartSummaryPage.continueShopping();
        ProductsPage.page.should('be.visible');
    });

    it('removes a product from the cart', () => {
        const productName = 'Sauce Labs Bolt T-Shirt';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        CartSummaryPage.page.should('be.visible');
        CartSummaryPage.removeFromCart(productName)
        CartSummaryPage.items.should('have.length', 0)
        CartSummaryPage.removeButton.should('not.exist')
        HeaderPage.cart.should('have.text', '');
    });

    it('can open the checkout information page', () => {
        const productName = 'Sauce Labs Bike Light';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        CartSummaryPage.page.should('be.visible');
        CartSummaryPage.goToCheckout();
        CheckoutInfoPage.page.should('be.visible');
    });
});
