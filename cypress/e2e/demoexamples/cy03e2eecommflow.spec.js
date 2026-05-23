/// <reference types="cypress" />

// E2E ecomm flow
describe("End To End ecomm Flow ", function () {
  it("Test Case for End To End ecomm flow", function () {
    const productname = "Nokia Edge";

    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
    cy.get("#username").type("rahulshettyacademy");
    cy.get("#password").type("Learning@830$3mK2");
    cy.contains("Sign In").click();
    cy.contains("Shop Name").should("be.visible");

    cy.get("app-card").should("have.length", 4); //Verify page display 4 ecomm products

    cy.get("app-card")
      //   .filter(':contains("Nokia Edge")')
      .filter(`:contains(${productname})`)
      .then(($element1) => {
        cy.wrap($element1).should("have.length", 1); // Verify filter only on item
        cy.wrap($element1).contains("button", "Add").click(); // clikck on Add button
      });
    cy.get("app-card").eq(0).contains("button", "Add").click(); // added one mor item to cart
    cy.contains("a", "Checkout").click();
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($eletotal) => {
        const total = Number($eletotal.text().split(" ")[1]);
        sum = sum + total;
      })
      .then(function () {
        expect(sum).to.be.lessThan(200000);
      });

    cy.contains("button", "Checkout").click();
    cy.get("#country").type("India");
    cy.wait(5000);
    cy.get(".suggestions li a").click({ force: true });
    cy.get(".ng-untouched > .btn").click();
    cy.get(".alert.alert-success").should("contain", "Success!");
  });
});
