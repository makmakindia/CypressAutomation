/// <reference types="cypress"/>

//mocha testing framework
describe("Child Tab Handling", function () {
  it("invoke and origin tests", function () {
    // write test cases here

    cy.visit("https://login.dev.treez.io/");
    cy.get('[data-testid="support-center-link"]')
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://support.treez.io", () => {
      cy.get(".flex.flex-col div h1").should("have.text", "SellTreez POS");
    });
  });
});
