/// <reference types="cypress" />

const csv = await neatCSV(text);

describe("Demo on JWT example", () => {
  it("JWT Demo 1", () => {
    cy.JWTlogin().then(() => {
      cy.visit("https://rahulshettyacademy.com/client/#/dashboard/dash", {
        onBeforeLoad(win) {
          win.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.url().should("include", "dashboard");

    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.get("h3").should("contain", "ZARA COAT 3");
    cy.get("button").contains("Checkout").click();

    //select country
    cy.get("[placeholder='Select Country']").type("ind");
    cy.get(".ta-results")
      .find("button")
      .each(($el, index, $list) => {
        if ($el.text().trim() === "India") {
          cy.wrap($el).click();
        }
      });

    cy.get(".action__submit").click();

    cy.wait(2000);
    cy.get('[class*="btn btn-primary mt-"]').click();

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_mkarun1122.csv",
    ).then(async (text) => {
      const csv = await neatCSV(text);
      console.log(csv);
      //   const actualProductCSV = csv[0]["Product Name"];
      //   expect(actualProductCSV).to.equal("ZARA COAT 3");
    });
  });
});
