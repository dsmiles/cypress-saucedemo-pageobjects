/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import CheckoutSummaryPage from "../pageobjects/CheckoutSummaryPage";

describe('Checkout information', () => {
    beforeEach(() => {
        LoginPage.logIn("standard_user", "secret_sauce")
        ProductsPage.page.should('be.visible');

        const productName = 'Sauce Labs Bolt T-Shirt';
        ProductsPage.addToCart(productName);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.page.should('be.visible');
    })

    it('cancel the checkout', () => {
        CheckoutInfoPage.cancelCheckout();
        ShoppingCartPage.page.should('be.visible');
    });

    // TODO - Remove - equivalence partitioning means these are the same
    // these error states should have already been unit tested
    it('enter missing values - no first name', () => {
        CheckoutInfoPage.submitPersonalInfo('', 'Smith', 'BS7 8EU');
        CheckoutInfoPage.errorMessage.should('have.text', 'Error: First Name is required');
    });

    // TODO - Remove - equivalence partitioning means these are the same
    // these error states should have already been unit tested
    it('enter missing values - no last name', () => {
        CheckoutInfoPage.submitPersonalInfo('John', '', 'BS7 8EU');
        CheckoutInfoPage.errorMessage.should('have.text', 'Error: Last Name is required');
    });

    // TODO - Remove - equivalence partitioning means these are the same
    // these error states should have already been unit tested
    it('enter missing values - postal code', () => {
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', '');
        CheckoutInfoPage.errorMessage.should('have.text', 'Error: Postal Code is required');
    });

    it.only('continue to checkout', () => {
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', 'BS7 8EU');
        CheckoutSummaryPage.page.should('be.visible');
    });
});
