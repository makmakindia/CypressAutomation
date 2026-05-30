class ConfirmationPage {
  selectCountry(nameofcountry) {
    cy.get("#country").type(nameofcountry);
    cy.wait(5000);
    cy.get(".suggestions li a").click({ force: true });
    cy.get(".ng-untouched > .btn").click();
  }

  checksuccessmsg(ordersuccessmsg) {
    cy.get(".alert.alert-success").should("contain", ordersuccessmsg);
  }
}

export default ConfirmationPage;
