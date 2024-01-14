/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import CheckoutSummaryPage from "../pageobjects/CheckoutSummaryPage";
import CheckoutCompletePage from "../pageobjects/CheckoutCompletePage";

describe('Checkout complete', () => {
    beforeEach(() => {
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');

        const productName = 'Sauce Labs Bolt T-Shirt';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.page.should('be.visible');
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', 'BS7 8EU');
        CheckoutSummaryPage.page.should('be.visible');
        CheckoutSummaryPage.finishCheckout();
        CheckoutCompletePage.page.should('be.visible');
    })

    it('checkout process is complete', () => {
        CheckoutCompletePage.title.should('have.text', 'Checkout: Complete!');
        CheckoutCompletePage.backHomeButton.should('be.visible');
        HeaderPage.cart.should('have.text', '');
    });

    it('return to product inventory page', () => {
        CheckoutCompletePage.backToProducts();
        ProductsPage.page.should('be.visible');
    });
});
