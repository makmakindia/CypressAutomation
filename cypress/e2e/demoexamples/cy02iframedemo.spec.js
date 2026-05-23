/// <reference types="cypress"/>
import "cypress-iframe";

//mocha testing framework
describe("Child Tab Handling", function () {
  it("invoke and origin tests", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('li a[href*="mentorship"]').eq(1).click({ force: true });
    // Re-query iframe again after page update
    cy.iframe()
      .contains("a", "Mentorship")
      .should("be.visible")
      .click({ force: true });

    // Re-fetch iframe content completely
    cy.iframe()
      .contains("h1", "BRONZE", { timeout: 20000 })
      .should("be.visible");
  });
});
