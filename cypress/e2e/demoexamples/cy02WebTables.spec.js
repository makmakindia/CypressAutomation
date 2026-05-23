/// <reference types="cypress"/>

//mocha testing framework
describe("Web Table Handling Suite", function () {
  it("Web Table - Sibling - JQuery cmds", function () {
    // write test cases here

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      const coursetext = $e1.text();
      // cy.log(coursetext)
      if (coursetext.includes("Python")) {
        // next is used to move sibling elements , to avoid this error we have resolve promise
        // "cy.get(...).eq(...).next(...).text is not a function"

        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const pricetext = price.text();
            expect(pricetext).to.equal("25");
          });
      }
    });
  });
});
