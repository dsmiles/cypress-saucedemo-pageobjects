/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import ProductDetailsPage from "../pageobjects/ProductDetailsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Product details page', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');
    })

    it('go back to the products page', () => {
        ProductsPage.openProductDetails(PRODUCT_NAMES.BIKE_LIGHT);
        ProductDetailsPage.view.should('be.visible');
        ProductDetailsPage.backToProducts();
        ProductDetailsPage.view.should('not.exist');
    })

    it('add a product to the cart', () => {
        ProductsPage.openProductDetails(PRODUCT_NAMES.BIKE_LIGHT);
        ProductDetailsPage.view.should('be.visible');

        HeaderPage.cart.should('have.text', '');
        ProductDetailsPage.addToCart();
        HeaderPage.cart.should('have.text', '1');

        ProductDetailsPage.addButton.should('not.exist');
        ProductDetailsPage.removeButton.should('be.visible');
    })

    it('remove a product from the cart', () => {
        ProductsPage.openProductDetails(PRODUCT_NAMES.BIKE_LIGHT);
        ProductDetailsPage.view.should('be.visible');
        ProductDetailsPage.addToCart();

        HeaderPage.cart.should('have.text', '1');
        ProductDetailsPage.removeFromCart();
        HeaderPage.cart.should('have.text', '');

        ProductDetailsPage.addButton.should('be.visible');
        ProductDetailsPage.removeButton.should('not.exist');
    })
})
