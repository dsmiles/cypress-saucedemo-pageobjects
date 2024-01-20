class CheckoutInfoPage {

    get view() {
        return cy.get('#checkout_info_container');
    }

    get firstName() {
        return cy.dataTest('firstName');
    }

    get lastName() {
        return cy.dataTest('lastName');
    }

    get postalCode() {
        return cy.dataTest('postalCode');
    }

    get cancelButton() {
        return cy.dataTest('cancel');
    }

    get continueButton() {
        return cy.dataTest('continue');
    }

    get errorMessage () {
        return cy.dataTest('error');
    }

    /**
     * Cancel the checkout process
     */
    cancelCheckout() {
        this.cancelButton.click();
    }

    /**
     * Submit the personal information, enters details and clicks submit
     *
     * @param {string} firstName
     * @param {string} LastName
     * @param {string} postalCode
     */
    submitPersonalInfo(firstName, LastName, postalCode) {

        if (firstName) {
            this.firstName.type(firstName);
        }
        if (LastName) {
            this.lastName.type(LastName);
        }
        if (postalCode) {
            this.postalCode.type(postalCode);
        }
        this.continueButton.click();
    }
}

export default new CheckoutInfoPage();
