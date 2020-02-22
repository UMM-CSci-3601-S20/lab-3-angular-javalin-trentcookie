import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from './todo2';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-profile',
  templateUrl: './todo-profile.component2.html',
  styleUrls: ['./todo-profile.component2.scss']
})
export class TodoProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  todo: Todo;
  _id: string;

  ngOnInit(): void {
    // We subscribe to the parameter map here so we'll be notified whenever
    // that changes (i.e., when the URL changes) so this component will update
    // to display the newly requested user.
    this.route.paramMap.subscribe((pmap) => {
      this._id = pmap.get('id');
      this.todoService.getTodoById(this._id).subscribe(todo => this.todo = todo);
    });
  }

}
