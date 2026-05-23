/// <reference types="cypress"/>

//mocha testing framework
describe("Child Tab Handling", function () {
  it("invoke and origin tests", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((e1) => {
      const url = e1.prop("href");
      cy.log(url);
      cy.visit(url);
      cy.origin(url, () => {
        cy.get("header div h1").should(
          "include",
          "Foundations of Modern Higher Education",
        );
      });
    });
  });
});
