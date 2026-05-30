import ConfirmationPage from "../../support/pageObjects/ConfirmationPage";

class CartPage {
  checkCartTotalLT2L() {
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($eletotal) => {
        const total = Number($eletotal.text().split(" ")[1]);
        sum = sum + total;
      })
      .then(function () {
        expect(sum).to.be.lessThan(200000);
      });
  }

  checkoutbtn() {
    cy.contains("button", "Checkout").click();

    return new ConfirmationPage();
  }
}

export default CartPage;
