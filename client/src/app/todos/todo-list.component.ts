import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: []
})

export class TodoListComponent implements OnInit {
  // These are public so that tests can reference them (.spec.ts)
  public serverFilteredTodos: Todo[];
  public filteredTodos: Todo[];

  public todoOwner: string;

  public todoStatus: boolean;

  public todoCategory: string;
  public viewType: 'card' | 'list' = 'card';


  // Inject the UserService into this component.
  // That's what happens in the following constructor.
  //
  // We can call upon the service for interacting
  // with the server.o

  constructor(private todoService: TodoService) {

  }

  getTodosFromServer() {
    this.todoService.getTodos({
      owner: this.todoOwner,
      category: this.todoCategory,
      status: this.todoStatus
    }).subscribe(returnedTodos => {
      this.serverFilteredTodos = returnedTodos;
      this.updateFilter();
    }, err => {
      console.log(err);
    });
  }

  public updateFilter() {
    this.filteredTodos = this.todoService.filterTodos(
      this.serverFilteredTodos, { owner: this.todoOwner, category: this.todoCategory });
  }

  /**
   * Starts an asynchronous operation to update the users list
   *
   */
  ngOnInit(): void {
    this.getTodosFromServer();
  }
}
