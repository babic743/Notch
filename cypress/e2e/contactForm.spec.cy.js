/// <reference types="cypress" />
import HomePage from "../pageObjects/homePage";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
//TODO
describe("Homepage Tests", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
    homePage.acceptCookies();
  });

  it("Should click on Contact us button and fill in form", () => {
    cy.get("li.featured.menu-item.menu-contact-us > a").click();
    cy.wait(3000);
    cy.contains("How can we help? Let us know.");
    const randomText = generateRandomString(10);
    cy.get("#firstname").type(randomText);
    cy.get("#lastname").type(randomText);
    cy.get("#email").type("josipa@gmail.com");
    cy.get("#source").select("google");
    cy.get('label[for="Product Discovery"]').click();
    cy.get("#budget").select("€50.000 to €100.000");
    cy.get('label[for="pp"]').click();
    cy.get('button[type="submit"].js-contact-form-submit')
      .should("be.visible")
      .should("be.enabled");
  });
});
