class HomePage {
  visit() {
    const url = "https://wearenotch.com/";
    cy.visit(url);
  }

  acceptCookies() {
    cy.get("button.cky-btn-accept", { timeout: 10000 }) // Increase timeout if needed
      .should("be.visible")
      .each(($el) => {
        cy.wrap($el).click({ force: true }); // Click each element found
      });
    cy.get("#cookie_action_close_header", { timeout: 10000 }) // Increase timeout if needed
      .should("be.visible")
      .each(($el) => {
        cy.wrap($el).click({ force: true }); // Click each element found
      });
  }
}

export default HomePage;
