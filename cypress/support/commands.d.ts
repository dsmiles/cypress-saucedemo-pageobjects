/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(value: string) : Chainable<any>;

        /**
         * Custom command to select DOM element by data-test attribute
         * @param value
         * @example cy.dataTest('greeting')
         */
        dataTest(value: string) : Chainable<any>;
    }

    interface Chainable<Subject = any> {
        /**
         * Custom command to directly set the contents of the shopping
         * cart in the web browsers LocalStorage. Takes an array of integers.
         *
         * @param newContents - array of product IDs
         * @example cy.setCartContents([PRODUCTS.BOLT_TSHIRT, PRODUCTS.BACKPACK])
         */
        setCartContents(newContents: any): void
    }
}
