// SELECTORS
const NEW_TODO = '.new-todo';
const TODO_LIST = 'div.view > label';
const FILTERS = '.filters';
const TAB_SELECTED = '.components-Header-style-selected';
const FOOTER = '.footer';
const FOOTER_ITEM_COUNT = '.todo-count';
const FILTER_ACTIVE = 'Active';
const FILTER_ALL = 'All';
const FILTER_COMPLETED = 'Completed';
const COMPLETE_TODO = '.toggle';
const CLEAR_COMPLETED = '.clear-completed';
const COMPLETED_TODO = '.completed';
const DELETE_TODO = '.destroy';
const MARK_UNMARK_ALL = '[for="toggle-all"]';

// UTILITY METHODS
export const verifyTodoManagementLoad = () => {
  cy.get(NEW_TODO).should('be.visible');
};

export const addTodo = title => {
  let todoArray = title.split(",");

  todoArray.forEach(function(value){
    cy.get(NEW_TODO)
    .type(value)
    .type('{enter}');
  });
  
};

export const verifyTodoAdded = title => {
  let todoArray = title.split(",");

  todoArray.forEach(function(value){
    cy.get(TODO_LIST).contains(value).should('be.visible');
  });
};

export const verifyTodoCompleted = title => {
  let todoArray = title.split(",");

  todoArray.forEach(function(value, i){
    cy.get(COMPLETED_TODO).contains(value).should('be.visible');
  });
};

export const verifyFiltersShown= title => {
  cy.get(FILTERS).should('be.visible');
};

export const verifyTodoCount= count => {
  cy.get(FOOTER_ITEM_COUNT).contains(count).should('be.visible');
};

export const selectTab = tab => {
  switch (tab) {
    case 'All':
        cy.get(FOOTER).contains(FILTER_ALL).click();
        break;
    case 'Active':
        cy.get(FOOTER).contains(FILTER_ACTIVE).click();
        break;
    case 'Completed':
        cy.get(FOOTER).contains(FILTER_COMPLETED).click();
        break;
  }
};

export const checkTodoComplete = title => {
  let todoArray = title.split(",");

  todoArray.forEach(function(value, i){
    if(cy.get(TODO_LIST).contains(value)) {
      cy.get(TODO_LIST).get(COMPLETE_TODO).eq(i).click();
    }
  });
};

export const clearCompleted = () => {
  cy.get(CLEAR_COMPLETED).click();
};

export const deleteTodos = title => {
  let todoArray = title.split(",");

  cy.get(TODO_LIST).get(DELETE_TODO).invoke('show');

  todoArray.forEach(function(value, i){
      cy.get(DELETE_TODO).eq(0).click();
  });

};

export const markUnmarkAllTodos = () => {
  cy.get(MARK_UNMARK_ALL).click();
};
