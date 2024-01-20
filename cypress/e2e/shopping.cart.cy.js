/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import HeaderPage from "../pageobjects/HeaderPage";
import ShoppingCartPage from "../pageobjects/ShoppingCartPage";
import CheckoutInfoPage from "../pageobjects/CheckoutInfoPage";
import {PRODUCT_NAMES} from "../support/constants/ProductData";
import {STANDARD_USER} from "../support/constants/Users";

describe('Shopping cart summary', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');
    })

    it('cart shows correct details', () => {
        ProductsPage.addToCart(PRODUCT_NAMES.BOLT_TSHIRT);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.items.should('have.length', 1);
        ShoppingCartPage.itemName.should('have.text', PRODUCT_NAMES.BOLT_TSHIRT);
        ShoppingCartPage.itemPrice.should('have.text', "$15.99");
        HeaderPage.cart.should('have.text', '1');
    });

    it('continue shopping', () => {
        ProductsPage.addToCart(PRODUCT_NAMES.FLEECE_JACKET);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.continueShopping();
        ProductsPage.view.should('be.visible');
    });

    it('removes a product from the cart', () => {
        ProductsPage.addToCart(PRODUCT_NAMES.BOLT_TSHIRT);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.removeFromCart(PRODUCT_NAMES.BOLT_TSHIRT)
        ShoppingCartPage.items.should('have.length', 0)
        ShoppingCartPage.removeButton.should('not.exist')
        HeaderPage.cart.should('have.text', '');
    });

    it('can open the checkout information page', () => {
        ProductsPage.addToCart(PRODUCT_NAMES.BIKE_LIGHT);
        HeaderPage.openCart();
        ShoppingCartPage.view.should('be.visible');
        ShoppingCartPage.goToCheckout();
        CheckoutInfoPage.view.should('be.visible');
    });
});
