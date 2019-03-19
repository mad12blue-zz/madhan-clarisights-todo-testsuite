// SELECTORS

// UTILITY METHODS

//Visit an url
export const visitUrl = url => {
  cy.visit(url, { failOnStatusCode: false });
};

//Verify if the page has been loaded
export const verifyPageLoad = title => {
  cy.title().should('include', title);
};
