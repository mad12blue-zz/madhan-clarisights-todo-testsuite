// SELECTORS
const SEARCH_BAR = '[title="Search"]';
const SEARCH_BAR_TEXT = '.RNNXgb';
const LIST_BOX = '[role="listbox"]';
const LIST_ITEMS = '.sbl1';
const SEARCH_BUTTON = 'name="btnK"';
const RESULTS_PAGE = '#res';

// UTILITY METHODS

//Verify if google search page is loaded
export const verifyGoogleSearchPageLoad = () => {
  cy.get(SEARCH_BAR)
  .should('be.visible');
};

//Enter text in search field
export const enterSearchText = (text) => {
  cy.get(SEARCH_BAR)
  .type(text)
  .wait(2000);
};

//Verify the search result count
export const verifySuggestedSearchResultsCount = (count) => {
  cy.get(LIST_ITEMS)
  .should('have.length', parseInt(count)+1);
};

//Verify the search result text
export const verifySuggestedSearchResultsText = (text) => {
  cy.get(LIST_ITEMS)
  .each(($el, index, $list) => {
    if(index != ($list.length-1)) expect($el).to.contain(text);
  });
};

//Verify if text is entered in google search
export const verifyGoogleSearchTextEntered = (text) => {
  cy.get(LIST_ITEMS)
  .eq(0)
  .should('have.text',text);
};

//Click on the first search result
export const clickFirstSearchResult = () => {
  cy.get(LIST_ITEMS)
  .eq(0)
  .click();
};

//Verify if results page is loaded
export const verifyResultsPageLoad = () => {
  cy.get(RESULTS_PAGE)
  .should('be.visible');
};

//Clear text from the search field
export const clearSearchText = () => {
  cy.get(SEARCH_BAR)
  .clear();
};

//Verify if suggestion list is disappeared
export const verifySuggestionListNotShown = () => {
  cy.get(LIST_BOX)
  .should('not.be.visible');;
};
