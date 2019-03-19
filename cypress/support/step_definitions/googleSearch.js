const miscUtils = require('../utilities/misc.utils');
const dataUtils = require('../utilities/data.utils');
const googleSearchUtils = require('../utilities/googleSearch.utils');

// GIVEN's (Pre-condition)

// Given implementation is a precondition that user opens google search page
given('I open google search page', () => {
  miscUtils.visitUrl(dataUtils.PAGE_URL);
});

// Given implementation is a precondition that user is already on google search page
given('I am on google search page', () => {
  googleSearchUtils.verifyGoogleSearchPageLoad();
});

// Given implementation is precondition that user has already entered search text
given('I have already entered search text {string} on google search page', searchText => {
  googleSearchUtils.verifyGoogleSearchTextEntered(searchText);
});


// WHEN's (Action)

// When implementation is an action to search on google search page
when(`I search for the word {string}`, searchText => {
  googleSearchUtils.enterSearchText(searchText);
});

// When implementation is an action to click on first search result
when('I click on the first search result', () => {
  googleSearchUtils.clickFirstSearchResult();
});

// When implementation is an action to delete search text
when('I delete the search text', () => {
  googleSearchUtils.clearSearchText();
});


// THEN's (Verification)

// Then implementation is a verification to check title of the page
then(`I see {string} in the title`, title => {
  miscUtils.verifyPageLoad(title);
});

// Then implementation is a verification to check search list
then(`I see {string} suggested items listed`, count => {
  googleSearchUtils.verifySuggestedSearchResultsCount(count);
});

// Then implementation is a verification to check text in returned results
then(`I see list of suggested search result with word {string} in it`, text => {
  googleSearchUtils.verifySuggestedSearchResultsText(text);
});

// Then implementation is a verification to check results page load
then(`I see search results page loaded`, () => {
  googleSearchUtils.verifyResultsPageLoad();
});

// Then implementation is a verification search results are not shown
then(`I dont see list of suggested search result`, () => {
  googleSearchUtils.verifySuggestionListNotShown();
});
