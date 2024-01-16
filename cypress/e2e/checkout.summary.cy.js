/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import CheckoutSummaryPage from "../pageobjects/CheckoutSummaryPage";
import CheckoutCompletePage from "../pageobjects/CheckoutCompletePage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Checkout overview', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.page.should('be.visible');

        ProductsPage.addToCart(PRODUCT_NAMES.BOLT_TSHIRT);
        HeaderPage.openCart();
        ShoppingCartPage.page.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.page.should('be.visible');
        CheckoutInfoPage.submitPersonalInfo('John', 'Smith', 'BS7 8EU');
        CheckoutSummaryPage.page.should('be.visible');
    })

    it('one product is present in checkout overview', () => {
        CheckoutSummaryPage.items.should('have.length', 1);
        CheckoutSummaryPage.itemName.should('have.text', 'Sauce Labs Bolt T-Shirt');
        CheckoutSummaryPage.itemDescription.should('not.be.empty');
        CheckoutSummaryPage.itemPrice.should('have.text', "$15.99");
    });

    it('cancel the checkout and return to the products page', () => {
        CheckoutSummaryPage.cancelCheckout();
        ProductsPage.page.should('be.visible');
        HeaderPage.cart.should('have.text', '1');
    })

    it('complete the checkout and go to the finished page', () => {
        CheckoutSummaryPage.finishCheckout();
        CheckoutCompletePage.page.should('be.visible');
    })
});