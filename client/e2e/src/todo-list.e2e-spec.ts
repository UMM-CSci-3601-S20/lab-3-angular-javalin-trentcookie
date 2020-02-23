import {TodoPage} from './todo-list.po';
import {browser, protractor, by, element} from 'protractor';

describe('Todo list', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
    page.navigateTo();
  });

  it('Should have the correct title', () => {
    expect(page.getTodoTitle()).toEqual('Todo');
  });

  it('Should type something in the owner filter and check that it returned correct elements', () => {
    page.typeInput('todo-owner-input', 'Blanche');

    // All of the todo cards should have the owner we are filtering by
    page.getTodoCards().each(e => {
      expect(e.element(by.className('todo-card-owner')).getText()).toEqual('Blanche');
    });
  });

  it('Should type something in the category filter and check that it returned correct elements', () => {
    page.typeInput('todo-category-input', 'software design');

    // All of the user cards should have the category we are filtering by
    page.getTodoCards().each(e => {
      expect(e.element(by.className('todo-card-category')).getText()).toEqual('software design');
    });
  });

  it('Should type something partial in the category filter and check that it returned correct elements', () => {
    page.typeInput('todo-category-input', 'me');

    // Go through each of the cards that are being shown and get the categories
    let categories = page.getTodoCards().map(e => e.element(by.className('todo-card-category')).getText());

    // We should see these categories
    expect(categories).toContain('video games');
    expect(categories).toContain('homework');

    // We shouldn't see these categories
    expect(categories).not.toContain('software design');
    expect(categories).not.toContain('groceries');
  });

  //need a status e2e test and body e2e test

  it('Should change the view', () => {
    page.changeView('list');

    expect(page.getTodoCards().count()).toEqual(0); // There should be no cards
    expect(page.getTodoListItems().count()).toBeGreaterThan(0); // There should be list items
  });

  it('Should select a category, switch the view, and check that it returned correct elements', () => {
    page.selectMatSelectValue('todo-category-select', 'homework');

    page.changeView('list');

    // All of the todo list items should have the category we are looking for
    page.getTodoListItems().each(e => {
      expect(e.element(by.className('todo-list-category')).getText()).toEqual('homework');
    });
  });

  it('Should click view profile on a todo and go to the right URL', () => {
    page.clickViewProfile(page.getTodoCards().first());

    // When the view profile button on the first todo card is clicked, we should be sent to the right URL
    page.getUrl().then(url => {
      expect(url.endsWith('/todos/58895985a22c04e761776d54')).toBe(true);
    });

    // On this profile page we were sent to, the name should be correct
    expect(element(by.className('todo-card-owner')).getText()).toEqual('Blanche');
  });

});
