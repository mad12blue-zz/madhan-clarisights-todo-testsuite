const miscUtils = require('../utilities/misc.utils');
const dataUtils = require('../utilities/data.utils');
const todoUtils = require('../utilities/todo.utils');

// GIVEN's

given('I open todo management page', () => {
  miscUtils.visitUrl(dataUtils.PAGE_URL);
});

given('I am on todo management app', () => {
  todoUtils.verifyTodoManagementLoad();
});

// WHEN's

when(`I add new todo {string}`, title => {
  todoUtils.addTodo(title);
});

when('I click on {string} tab in the footer', tabName => {
  todoUtils.selectTab(tabName);
});

when('I check todos {string} as complete', title => {
  todoUtils.checkTodoComplete(title);
});

when('I clear completed todos', () => {
  todoUtils.clearCompleted();
});

when('I delete todos {string}', title => {
  todoUtils.deleteTodos(title);
});

when('I mark all todos as completed', () => {
  todoUtils.markUnmarkAllTodos();
});

when('I unmark all todos as completed', () => {
  todoUtils.markUnmarkAllTodos();
});

// THEN's

then(`I see {string} in the title`, title => {
  miscUtils.verifyPageLoad(title);
});

then(`I see todo {string} added in the list`, title => {
  todoUtils.verifyTodoAdded(title);
});

then(`I see the item count {string}`, count => {
  todoUtils.verifyTodoCount(count);
});

then(`I see todos {string} marked as completed`, title => {
  todoUtils.verifyTodoCompleted(title);
});
