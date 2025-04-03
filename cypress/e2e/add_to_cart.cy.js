describe("Add to Cart", () => {
  it("Adds a product to the cart and updates the cart count", () => {
    cy.visit("/");

    // Confirm initial cart count is 0
    cy.get("nav").contains("My Cart (0)");

    // Click 'Add to Cart' for the first product
    cy.get(".products article").first().find("button").click({ force: true });

    // Confirm cart count updates to 1
    cy.get("nav").contains("My Cart (1)");
  });
});