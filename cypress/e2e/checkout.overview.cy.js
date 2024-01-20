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

describe('Checkout overview', () => {
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
    })

    it('one product is present in checkout overview', () => {
        CheckoutOverviewPage.items.should('have.length', 1);
        CheckoutOverviewPage.itemName.should('have.text', 'Sauce Labs Bolt T-Shirt');
        CheckoutOverviewPage.itemDescription.should('not.be.empty');
        CheckoutOverviewPage.itemPrice.should('have.text', "$15.99");
    });

    it('cancel the checkout and return to the products page', () => {
        CheckoutOverviewPage.cancelCheckout();
        ProductsPage.view.should('be.visible');
        HeaderPage.cart.should('have.text', '1');
    })

    it('complete the checkout and go to the finished page', () => {
        CheckoutOverviewPage.finishCheckout();
        CheckoutCompletePage.view.should('be.visible');
    })
});
