/// <reference types="cypress" />

describe("Test Suite - POST req", function () {
  it("Test case for HTTP POST Request", function () {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Learn Java - explorer",
      isbn: "i10102",
      aisle: "a10102",
      author: "Arun2",
    }).then(function (response) {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.body).to.have.property("ID");
    });
  });

  it("http GET - Get book", () => {
    cy.request("GET", "http://216.10.245.166/Library/GetBook.php?ID=3389").then(
      (response) => {
        cy.log(response.body[0].ID);
        expect(response.status).to.eq(200);
        cy.log(response.body[0].author);
        cy.log(response.body[0].aisle);
        cy.log(response.body[0].book_name);
        //   cy.log(response.body);
        //   expect(response.body).to.have.length(3);

        //   expect(response.body[0]).to.have.property("book_name");
        //   expect(response.body[0]).to.have.property("isbn");
        //   expect(response.body[0]).to.have.property("aisle");
        //   expect(response.body[1]).to.have.property("book_name");
        //   expect(response.body[0]).to.have.property("isbn");
        //   expect(response.body[1]).to.have.property("aisle");

        //   response.body.forEach((book) => {
        //     // expect(book.author).to.contain("Arun111");
        //   });
        //   expect(response.body[0]).to.have.property(
        //     "book_name",
        //     "Learn Java - explorer",
        //   );
        //   expect(response.body[0]).to.have.property("isbn", "abcd112123");
        //   expect(response.body[0]).to.have.property("aisle", "100112123");
      },
    );
  });
});
