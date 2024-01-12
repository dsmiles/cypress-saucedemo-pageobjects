/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
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
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.items.should('have.length', 1);
        ShoppingCartPage.itemName.should('have.text', productName);
        ShoppingCartPage.itemPrice.should('have.text', "$15.99");
        HeaderPage.cart.should('have.text', '1');
    });

    it('continue shopping', () => {
        const productName = 'Sauce Labs Fleece Jacket';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.continueShopping();
        ProductsPage.page.should('be.visible');
    });

    it('removes a product from the cart', () => {
        const productName = 'Sauce Labs Bolt T-Shirt';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.removeFromCart(productName)
        ShoppingCartPage.items.should('have.length', 0)
        ShoppingCartPage.removeButton.should('not.exist')
        HeaderPage.cart.should('have.text', '');
    });

    it('can open the checkout information page', () => {
        const productName = 'Sauce Labs Bike Light';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.page.should('be.visible');
    });
});
