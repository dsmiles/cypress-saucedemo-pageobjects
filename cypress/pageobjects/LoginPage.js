import {ROUTES} from "../support/constants/Routes";

class LoginPage {

    get view() {
        return cy.get('#login_button_container');
    }

    get username() {
        return cy.dataTest("username");
    }

    get password() {
        return cy.dataTest("password");
    }

    get loginButton() {
        return cy.dataTest("login-button");
    }

    get errorMessage() {
        return cy.dataTest("error");
    }

    /**
     * Login to application, enters details and clicks submit
     *
     * @param {string} username
     * @param {string} password
     */
    logIn(username, password) {
        // The demo site from Sauce Labs has a problem with the way Service Workers have been
        // configured. It sometimes causes the 'load' event not to happen. I tried various ways
        // to resolve the issue, but the solution was to simply disable the service worker by
        // stubbing the API call.
        cy.intercept('/service-worker.js', {
            body: undefined
        })
        cy.visit(ROUTES.LOGIN);

        if (username) {
            this.username.type(username);
        }
        if (password) {
            this.password.type(password);
        }

        this.loginButton.click();
    }
}

export default new LoginPage;
