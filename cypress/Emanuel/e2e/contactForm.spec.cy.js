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

//ovaj dio iznad je već standardna funkcija iznad za random generiranje stringa koja može biti urednija i drugačije napisana
//međutim praksa je da se ovakve funkcije nikada ne drže u testu nego idu u poseban file koji možemo nazvati utility npr i
// onda je pozivamo iz toga

describe("Homepage Tests", () => {
  const homePage = new HomePage();

  //beforeEach hook koristimo kada imamo 2 ili više it-a- u ovom testu imamo samo jedan pa bi trebalo biti samo before uvijet
  beforeEach(() => {
    cy.visit("/");
    homePage.acceptCookies();
  });


  // test nije napisan preko POM-a...

//   it('should check if Get in Touch button is clickable after we fill out all required fields', () => {
//     NotchPage.clickRejectButton();
//     NotchPage.fillFirstName(formData.firstName);
//     NotchPage.fillLastName(formData.lastName);
//     NotchPage.fillEmail(formData.email);
//     NotchPage.fillPhone(formData.phoneNumber);
//     NotchPage.clickProductDiscoveryLabel();
//     NotchPage.clickColorSpaceGrayLabel();
//     NotchPage.verifySubmitButtonClickable();
//   });
// }); ovo bi bio primjer POM-a gdje je u NotchPage definirano svi ovi selectori

  it("Should click on Contact us button and fill in form", () => {
    cy.get("li.featured.menu-item.menu-contact-us > a").click();
    cy.wait(3000);
    cy.contains("How can we help? Let us know.");
    const randomText = generateRandomString(10);
    //const se obično definira skroz na početku tj ispod describe
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


// ja bih ovaj test napisao recimo ovako: čisto da imaš okvirono predstavu i da vidiš kako test ljepše izgleda

// import NotchPage from '../page/notch.page';

// describe('Fill out Form', () => {

//   const formData = {
//     firstName: 'Zvone',
//     lastName: 'Knez',
//     email: 'test@wearenotch.com',
//     phoneNumber: '123-456-7890'
//   };

//   before(() => {
//     NotchPage.visit(); // Navigate to the contact page
//   });

//   it('should check if Get in Touch button is clickable after we fill out all required fields', () => {
//     NotchPage.clickRejectButton();
//     NotchPage.fillFirstName(formData.firstName);
//     NotchPage.fillLastName(formData.lastName);
//     NotchPage.fillEmail(formData.email);
//     NotchPage.fillPhone(formData.phoneNumber);
//     NotchPage.clickProductDiscoveryLabel();
//     NotchPage.clickColorSpaceGrayLabel();
//     NotchPage.verifySubmitButtonClickable();
//   });
// });


// a ovo bi mi bio NotchPage

// class NotchPage {

//   visit() {
//     cy.visit('https://wearenotch.com/contact/');
//   }

//   get rejectButton() {
//     return cy.get('button[data-cky-tag="reject-button"]');
//   }

//   get firstNameInput() {
//     return cy.get('input[id="firstname"]');
//   }

//   get lastNameInput() {
//     return cy.get('input[id="lastname"]');
//   }

//   get emailInput() {
//     return cy.get('input[id="email"]');
//   }

//   get phoneInput() {
//     return cy.get('input[id="phone"]');
//   }

//   get productDiscoveryLabel() {
//     return cy.get('label[for="Product Discovery"]');
//   }

//   get colorSpaceGrayLabel() {
//     return cy.get('label[class="color-space-gray"]');
//   }

//   get submitButton() {
//     return cy.get('button[type="submit"]');
//   }

//   fillFirstName(firstName) {
//     this.firstNameInput.clear().type(firstName);
//   }

//   fillLastName(lastName) {
//     this.lastNameInput.clear().type(lastName);
//   }

//   fillEmail(email) {
//     this.emailInput.clear().type(email);
//   }

//   fillPhone(phoneNumber) {
//     this.phoneInput.clear().type(phoneNumber);
//   }

//   clickRejectButton() {
//     this.rejectButton.click();
//   }

//   clickProductDiscoveryLabel() {
//     this.productDiscoveryLabel.click();
//   }

//   clickColorSpaceGrayLabel() {
//     this.colorSpaceGrayLabel.click();
//   }

//   verifySubmitButtonClickable() {
//     this.submitButton.should('exist').and('be.visible').and('not.be.disabled');
//   }
// }

// export default new NotchPage();
