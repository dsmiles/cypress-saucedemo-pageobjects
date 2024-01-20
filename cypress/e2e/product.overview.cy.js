/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import ProductDetailsPage from "../pageobjects/ProductDetailsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Product overview page', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');
    })

    it('all products displayed with expected state', () => {
        ProductsPage.items.should('have.length', 6);
        ProductsPage.addButton.should('be.visible').should('have.length', 6);
        ProductsPage.removeButton.should('not.exist');
    });

    it('product details can be opened', () => {
        ProductsPage.openProductDetails(PRODUCT_NAMES.BIKE_LIGHT);
        ProductDetailsPage.view.should('be.visible');
        ProductDetailsPage.view.contains('Sauce Labs Bike Light')
    })

    it('add a product to the cart', () => {
        HeaderPage.cart.should('have.text', '');
        ProductsPage.addToCart(PRODUCT_NAMES.BACKPACK);
        HeaderPage.cart.should('have.text', '1');
        ProductsPage.addButton.should('be.visible').should('have.length', 5);
        ProductsPage.removeButton.should('be.visible').should('have.length', 1);
    })

    it('remove a product from the cart', () => {
        ProductsPage.addToCart(PRODUCT_NAMES.BACKPACK);
        HeaderPage.cart.should('have.text', '1');
        ProductsPage.removeFromCart(PRODUCT_NAMES.BACKPACK)
        HeaderPage.cart.should('have.text', '');
        ProductsPage.addButton.should('be.visible').should('have.length', 6);
        ProductsPage.removeButton.should('not.exist')
    })

    it('open the shopping cart page', () => {
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
    })
})
