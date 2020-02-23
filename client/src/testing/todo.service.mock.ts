import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../app/todos/todo';
import { TodoService } from '../app/todos/todo.service';

/**
 * A "mock" version of the `TodoService` that can be used to test components
 * without having to create an actual service.
 */
@Injectable()
export class MockTodoService extends TodoService {
  static testTodos: Todo[] = [
    {
      _id: "58895985a22c04e761776d54",
      owner: "Blanche",
      status: false,
      body: "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
      category: "software design"
    }
  ];

  constructor() {
    super(null);
  }

  getTodos(filters: { owner?: string }): Observable<Todo[]> {
    // Just return the test users regardless of what filters are passed in
    return of(MockTodoService.testTodos);
  }

  getTodoByOwner(owner: string): Observable<Todo> {
    // If the specified ID is for the first test user,
    // return that user, otherwise return `null` so
    // we can test illegal user requests.
    if (owner === MockTodoService.testTodos[0].owner) {
      return of(MockTodoService.testTodos[0]);
    } else {
      return of(null);
    }
  }

}
