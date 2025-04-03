describe("Product Details", () => {
  it("Navigates to the product detail page", () => {
    cy.visit("/");
    cy.get(".products article").first().find("a").click();
    cy.url().should("include", "/products/");
    cy.get(".product-detail").should("be.visible");
  });
});