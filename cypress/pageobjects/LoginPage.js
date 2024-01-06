class LoginPage {
    get page() {
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