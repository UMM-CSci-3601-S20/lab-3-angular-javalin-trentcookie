import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-profile',
  templateUrl: './todo-profile.component.html',
  styleUrls: ['./todo-profile.component.scss']
})
export class TodoProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  todo: Todo;
  owner: string;

  ngOnInit(): void {
    // We subscribe to the parameter map here so we'll be notified whenever
    // that changes (i.e., when the URL changes) so this component will update
    // to display the newly requested user.
    this.route.paramMap.subscribe((pmap) => {
      this.owner = pmap.get('owner');
      this.todoService.getTodoByOwner(this.owner).subscribe(todo => this.todo = todo);
    });
  }

}
