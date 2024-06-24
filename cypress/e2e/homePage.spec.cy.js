/// <reference types="cypress" />
import HomePage from "../pageObjects/homePage";

describe("Homepage Tests", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
    homePage.acceptCookies();
  });

  it("Should check Case Studies menu item", () => {
    cy.get("#menu-primary-navigation > .menu-case-studies > a").contains(
      "Case Studies"
    );
  });

  it("Should check Services menu item", () => {
    cy.get("#menu-primary-navigation > .menu-services").contains("Services");
  });

  it("Should check Expertise menu item", () => {
    cy.get("#menu-primary-navigation > .menu-expertise").contains("Expertise");
  });

  it("Should check Resources menu item", () => {
    cy.get(".menu-resources").contains("Resources");
  });

  it("Should check Careers menu item", () => {
    cy.get("#menu-primary-navigation > .menu-careers").contains("Careers");
  });

  it("Should click on the About menu item", () => {
    cy.get("#menu-primary-navigation > .menu-about").contains("About");
  });
});
