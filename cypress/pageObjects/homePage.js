class HomePage {
  visit() {
    const url = "https://wearenotch.com/";
    cy.visit(url);
  }

  acceptCookies() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // dodan ovaj dio koda zbog cross origin errora koj se pojavljivao u runneru nakon klika na "Accept All" button u cookie modalu.
      // nisam uspio rijesiti problem na nijedan drugi nacin
      return false;
    });

    cy.get('.cky-notice-btn-wrapper', { timeout: 20000 }) 
      .should('be.visible')
      .find('.cky-btn-accept') 
      .should('be.visible')
      .wait(1000)
      .click(); 
  }
}

export default HomePage;

