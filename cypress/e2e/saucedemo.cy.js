/// <reference types="cypress" />

describe('saucedemo', () => {

    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.intercept("POST","https://events.backtrace.io/**", {
            body: undefined
        })

        cy.intercept("OPTIONS","https://events.backtrace.io/**", {
            body: undefined
        })

        cy.intercept('/service-workers.js', {
            body: undefined
        })

        //cy.visit("https://www.saucedemo.com")
        cy.visit('/')
    })

    it('visit saucedemo.com', () => {
        cy.dataTest("username").type("standard_user");
        //cy.dataTest("password").type("badpwd");
         cy.dataTest("password").type("secret_sauce");
        cy.dataTest("login-button").click();

        // cy.get('#react-burger-menu-btn').click();
        // cy.get('#inventory_sidebar_link').click();
        //cy.get('#about_sidebar_link').click();
        // cy.get('#logout_sidebar_link').click();
        // cy.get('#reset_sidebar_link').click();
        // cy.get('#inventory_container').get('.inventory_list');

    })
})