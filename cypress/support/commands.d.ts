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
}