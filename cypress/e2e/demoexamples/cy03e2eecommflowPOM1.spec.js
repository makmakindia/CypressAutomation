/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage";

// E2E ecomm flow
describe("End To End ecomm Flow ", function () {
  var homepage;
  var productpage;
  var cartpage;
  var confirmationpage;

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    homepage = new HomePage();
    // productpage = new ProductPage();

    // cartpage = new CartPage();
    // confirmationpage = new ConfirmationPage();
    // this.homepage = new HomePage();
  });
  it("Test Case for Home Page End To End ecomm flow", function () {
    //Home page scenarios
    homepage.goToURL(this.data.appurl);
    const productpage = homepage.login(this.data.username, this.data.password);
  });
  it("Test Case for product page End To End ecomm flow", function () {
    //product page testing
    // const productpage = nw ProductPage();
    productpage.pageValdiation(this.data.homepagetext);
    productpage.VerifyCardLimit();
    productpage.selectProduct(this.data.productName);
    productpage.selectFristProduct();
    const cartpage = productpage.gotoCart();
  });

  it("Test Case for Cart page End To End ecomm flow", function () {
    //cart page scenaarios
    cartpage.checkCartTotalLT2L(); // cart value lssthan 2L
    const confirmationpage = cartpage.checkoutbtn();
  });

  it("Test Case for Confirmation page End To End ecomm flow", function () {
    //confrimation page
    confirmationpage.selectCountry(this.data.Country);
    confirmationpage.checksuccessmsg(this.data.ordersuccessmsg);
  });
});
