/// <reference types="Cypress" />

describe("Test Suite - HTTP Req and Res Tests    ", function () {
  it("Test case for HTTP Request", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      (ruthandler) => {
        ruthandler.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Arun";
        ruthandler.continue((response) => {
          expect(response.statusCode).to.equal(403);
        });
      },
    ).as("dummyrequest");

    cy.get("button[class='btn btn-primary']").click();
  });
});
