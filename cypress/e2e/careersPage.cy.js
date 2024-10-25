/// <reference types="cypress" />
import HomePage from "../pageObjects/homePage";

describe('Visit the homepage and click on Careers', () => {
  const homePage = new HomePage();

  it('Visits the homepage, accepts cookies, clicks on Careers, clicks on Fullstack engineer open position, verifies the page and the page URL', () => {
    homePage.visit();
    homePage.acceptCookies();
    cy.get("#menu-primary-navigation").contains("Careers").click();
    cy.url().should('eq', 'https://wearenotch.com/careers/');
    cy.wait(1000);
    cy.contains('Open positions').click();
    cy.wait(1000);
    cy.get("#jobs")
    .children(".container")
    .find(".c-jobs__item")
    .contains(".c-jobs__item_position", "Mid+ Fullstack Engineer")
    .parents(".c-jobs__item")
    .find(".e-btn--primary")
    .click()
    cy.url().should('eq', 'https://wearenotch.com/jobs/mid-fullstack-engineer/');
    cy.contains("Mid+ Fullstack Engineer").should('be.visible');
  });
});
