class CheckoutSummaryPage {

    get page() {
        return cy.get('#checkout_summary_container');
    }
}

export default new CheckoutSummaryPage();
