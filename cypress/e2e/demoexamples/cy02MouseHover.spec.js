/// <reference types="cypress"/>

//mocha testing framework
describe("Mouse Hover Suite", function () {
  it("Mouse Hover Tests", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // cy.get("div.mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    // cy.url().should("contain", "top");

    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
