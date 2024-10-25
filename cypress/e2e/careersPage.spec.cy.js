/// <reference types="cypress" />
import CareersPage from "../pages/careersPage";
import HomePage from "../pages/homePage";

describe('Visit the homepage and click on Careers', () => {
  const homePage = new HomePage();
  const careersPage = new CareersPage();

  it('it should click on Open application', () => {
    homePage.visit();
    homePage.acceptCookies();
    homePage.clickCareers();
    homePage.verifyCareers();
    cy.wait(2000);
    careersPage.clickGeneralApplyForJob();
    careersPage.verifyOpenApplication();  
  });
});
