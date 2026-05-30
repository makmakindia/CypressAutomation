import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";
import CartPage from "../../support/pageObjects/CartPage";
import ConfirmationPage from "../../support/pageObjects/ConfirmationPage";

Given("I am on ecommerce page", function () {
  // homepage = new HomePage();
  homepage.goToURL(this.data.appurl);
});

When("I login to the application", function () {
  // homepage = new HomePage();
  // productpage = new ProductPage();
  homepage.login(this.data.username, this.data.password);
  productpage.pageValdiation();
  productpage.VerifyCardLimit();
});

When("I add items to cart and checkout", function () {
  // productpage = new ProductPage();
  productpage.selectProduct(this.data.productName);
  productpage.selectFristProduct();
  productpage.gotoCart();
});

When("Validate total price limit", function () {
  // cartpage = new CartPage();
  cartpage.checkCartTotalLT2L(); // cart value lssthan 2L
  cartpage.checkoutbtn();
});

Then("Select country submit and Verify Thank you", function () {
  // confirmationpage = new ConfirmationPage();
  confirmationpage.selectCountry(this.data.Country);
  confirmationpage.checksuccessmsg(this.data.ordersuccessmsg);
});
