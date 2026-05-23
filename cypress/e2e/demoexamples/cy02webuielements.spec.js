/// <reference types="cypress"/>

//mocha testing framework
describe("Wb Elements Suite", function () {
  it("Dropdown - radio btn", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item")
      .find("div")
      .each(($e1, indexedDB, $list) => {
        if ($e1.text() === "India") {
          cy.wrap($e1).click();
        }
      });
    cy.get("#autocomplete").should("have.value", "India");

    //checkbox
    cy.get('[value="radio2"]').check();
    cy.get('[value="radio2"]').should("be.checked");

    //visible and not visible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
  });
});
