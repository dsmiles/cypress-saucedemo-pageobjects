/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import CheckoutOverviewPage from "../pageobjects/CheckoutOverviewPage";
import CheckoutCompletePage from "../pageobjects/CheckoutCompletePage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Checkout complete', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');

        ProductsPage.addToCart(PRODUCT_NAMES.BOLT_TSHIRT);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.view.should('be.visible');
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', 'BS7 8EU');
        CheckoutOverviewPage.view.should('be.visible');
        CheckoutOverviewPage.finishCheckout();
        CheckoutCompletePage.view.should('be.visible');
    })

    it('checkout process is complete', () => {
        CheckoutCompletePage.title.should('have.text', 'Checkout: Complete!');
        CheckoutCompletePage.backHomeButton.should('be.visible');
        HeaderPage.cart.should('have.text', '');
    });

    it('return to product inventory page', () => {
        CheckoutCompletePage.backToProducts();
        ProductsPage.view.should('be.visible');
    });
});
