/// <reference types="cypress"/>

//mocha testing framework
describe("Alerts", function () {
  it("Demo Alert test", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq(
        "Hello , share this practice page and share your knowledge",
      );
    });

    cy.get("#confirmbtn").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.eq("Hello , Are you sure you want to confirm?");
    });
  });
});
