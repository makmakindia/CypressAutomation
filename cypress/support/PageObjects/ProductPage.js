import CartPage from "./cartPage";

class ProductPage {
  pageValdiation() {
    cy.contains("Shop Name").should("be.visible");
  }

  VerifyCardLimit() {
    cy.get("app-card").should("have.length", 4); //Verify page display 4 ecomm products
  }

  selectFristProduct() {
    cy.get("app-card").eq(0).contains("button", "Add").click(); // added one mor item to cart
  }

  selectProduct(productName) {
    cy.get("app-card")
      //   .filter(':contains("Nokia Edge")')
      .filter(`:contains(${productName})`)
      .then(($element1) => {
        cy.wrap($element1).should("have.length", 1); // Verify filter only on item
        cy.wrap($element1).contains("button", "Add").click(); // clikck on Add button
      });
  }

  gotoCart() {
    cy.contains("a", "Checkout").click();

    return new CartPage();
  }
}

export default ProductPage;
