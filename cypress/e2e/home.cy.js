describe("Home Page", () => {
  it("Visits the home page", () => {
    cy.visit("/");
  });

  it("There are products on the page", () => {
    cy.visit("/");
    cy.get(".products article").should("be.visible");
  });
});