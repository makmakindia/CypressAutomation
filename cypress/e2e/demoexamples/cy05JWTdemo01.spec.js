/// <reference types="cypress" />


describe("Demo on JWT example", () => {

  it("JWT Demo 1", () => {

    cy.JWTlogin().then(() => {

      cy.visit(
        "https://rahulshettyacademy.com/client/#/dashboard/dash",
        {
          onBeforeLoad(win) {
            win.localStorage.setItem(
              "token",
              Cypress.env("token")
            );
          },
        }
      );

    });


    cy.url().should("include", "dashboard");


    cy.get(".card-body button:last-of-type")
      .eq(1)
      .click();


    cy.get("[routerlink*='cart']")
      .click();


    cy.get("h3")
      .should("contain", "ZARA COAT 3");


    cy.contains("Checkout")
      .click();


    cy.get("[placeholder='Select Country']")
      .type("ind");


    cy.get(".ta-results button")
      .each(($el) => {

        if ($el.text().trim() === "India") {
          cy.wrap($el).click();
        }

      });


    cy.get(".action__submit")
      .click();


    cy.contains("Click To Download Order Details in CSV")
      .click();


    cy.readFile(
  "cypress/downloads/order-invoice_mkarun1122.csv"
)
.then((text) => {

  cy.task("parseCSV", text);

})
.then((csv) => {

  console.log(csv);

  expect(csv[0]["Product Name"])
    .to.equal("ZARA COAT 3");

});

  });

});