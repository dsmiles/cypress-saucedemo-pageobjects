/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";

describe('Products page sorting', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        LoginPage.logIn("standard_user", "secret_sauce");
        ProductsPage.page.should('be.visible');
    })

    function testProductSorting(sortOption, expectedProductOrder) {
        ProductsPage.sortMenu.select(sortOption);
        ProductsPage.sortMenu.should('have.value', sortOption);

        const actualProductOrder = [];
        ProductsPage.productName.each(($item) => {
            actualProductOrder.push($item.text());
        }).then(() => {
            expect(actualProductOrder).to.deep.equal(expectedProductOrder);
        });
    }

    it('sorts products by name (A to Z)', () => {
        const expectedProductOrder = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ];

        testProductSorting('az', expectedProductOrder);
    });

    it('sorts products by name (Z to A)', () => {
        const expectedProductOrder = [
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Onesie',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Bike Light',
            'Sauce Labs Backpack',
        ];

        testProductSorting('za', expectedProductOrder);
    });

    it('sorts products by price (low to high)', () => {
        const expectedProductOrder = [
            'Sauce Labs Onesie',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Backpack',
            'Sauce Labs Fleece Jacket'
        ];

        testProductSorting('lohi', expectedProductOrder);
    });

    it('sorts products by price (high to low)', () => {
        const expectedProductOrder = [
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Backpack',
            'Sauce Labs Bolt T-Shirt',
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Bike Light',
            'Sauce Labs Onesie'
        ];

        testProductSorting('hilo', expectedProductOrder);
    });
});
