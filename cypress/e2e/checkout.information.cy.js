/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import CheckoutOverviewPage from "../pageobjects/CheckoutOverviewPage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Checkout information', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');

        ProductsPage.addToCart(PRODUCT_NAMES.BOLT_TSHIRT);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.view.should('be.visible');
    })

    it('cancel the checkout', () => {
        CheckoutInfoPage.cancelCheckout();
        ShoppingCartPage.view.should('be.visible');
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

    it('continue to checkout', () => {
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', 'BS7 8EU');
        CheckoutOverviewPage.view.should('be.visible');
    });
});
