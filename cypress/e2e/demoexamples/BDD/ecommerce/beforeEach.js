beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  homepage = new HomePage();
  productpage = new ProductPage();

  cartpage = new CartPage();
  confirmationpage = new ConfirmationPage();
});
