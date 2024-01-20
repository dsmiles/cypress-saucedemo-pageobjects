/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
import ProductsPage from "../pageobjects/ProductsPage";
import {STANDARD_USER} from "../support/constants/Users";
import {PRODUCT_NAMES} from "../support/constants/ProductData";

describe('Product page sorting', () => {
    beforeEach(() => {
        LoginPage.logIn(STANDARD_USER.USERNAME, STANDARD_USER.PASSWORD);
        ProductsPage.view.should('be.visible');
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
            PRODUCT_NAMES.BACKPACK,
            PRODUCT_NAMES.BIKE_LIGHT,
            PRODUCT_NAMES.BOLT_TSHIRT,
            PRODUCT_NAMES.FLEECE_JACKET,
            PRODUCT_NAMES.ONESIE,
            PRODUCT_NAMES.TATT_TSHIRT
        ];

        testProductSorting('az', expectedProductOrder);
    });

    it('sorts products by name (Z to A)', () => {
        const expectedProductOrder = [
            PRODUCT_NAMES.TATT_TSHIRT,
            PRODUCT_NAMES.ONESIE,
            PRODUCT_NAMES.FLEECE_JACKET,
            PRODUCT_NAMES.BOLT_TSHIRT,
            PRODUCT_NAMES.BIKE_LIGHT,
            PRODUCT_NAMES.BACKPACK,
        ];

        testProductSorting('za', expectedProductOrder);
    });

    it('sorts products by price (low to high)', () => {
        const expectedProductOrder = [
            PRODUCT_NAMES.ONESIE,
            PRODUCT_NAMES.BIKE_LIGHT,
            PRODUCT_NAMES.BOLT_TSHIRT,
            PRODUCT_NAMES.TATT_TSHIRT,
            PRODUCT_NAMES.BACKPACK,
            PRODUCT_NAMES.FLEECE_JACKET
        ];

        testProductSorting('lohi', expectedProductOrder);
    });

    it('sorts products by price (high to low)', () => {
        const expectedProductOrder = [
            PRODUCT_NAMES.FLEECE_JACKET,
            PRODUCT_NAMES.BACKPACK,
            PRODUCT_NAMES.BOLT_TSHIRT,
            PRODUCT_NAMES.TATT_TSHIRT,
            PRODUCT_NAMES.BIKE_LIGHT,
            PRODUCT_NAMES.ONESIE
        ];

        testProductSorting('hilo', expectedProductOrder);
    });
});
