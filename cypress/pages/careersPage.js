class CareersPage{

    clickOpenPositions(){
    cy.contains('Open positions').click();
    }

    clickGeneralApplyForJob(){
    cy.get("#jobs")
    .children(".container")
    .contains(".c-jobs__item_position", "Open application")
    .parents(".c-jobs__item")
    .find(".c-jobs__item_link")
    .click();
    }

    verifyOpenApplication(){
    cy.url().should('eq', 'https://wearenotch.com/jobs/open-application/');
    cy.contains("Open application").should('be.visible');
    }
}

export default CareersPage;
