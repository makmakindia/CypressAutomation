/// <reference types="Cypress" />

describe("Date Test Suite", function () {
  it("Verify date Test case", function () {
    const year = "2028";
    const date = "11";
    const monthNumber = "5";

    const expcteval = [monthNumber, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get(".react-date-picker__calendar-button__icon").click();
    cy.get(".react-calendar__navigation__label__labelText").click();
    cy.get(".react-calendar__navigation__label__labelText").click();
    cy.contains("button", year).click();
    cy.get(".react-calendar__year-view__months__month")
      .eq(Number(monthNumber) - 1)
      .click();
    cy.contains("abbr", date).click();
    cy.get("input.react-date-picker__inputGroup__input").each(($e1, index) => {
      cy.wrap($e1).invoke("val").should("eq", expcteval[index]);
    });
  });
});
