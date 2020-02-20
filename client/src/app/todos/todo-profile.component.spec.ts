import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { MockUserService } from '../../testing/user.service.mock';
import { Todo } from './todo';
import { TodoCardComponent } from './todo-card.component';
import { TodoProfileComponent } from './todo-profile.component';
import { TodoService } from './todo.service';
/*
describe('UserProfileComponent', () => {
  let component: TodoProfileComponent;
  let fixture: ComponentFixture<TodoProfileComponent>;
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule
      ],
      declarations: [TodoProfileComponent, TodoCardComponent],
      providers: [
        { provide: TodoService, useValue: new MockUserService() },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the info of a specific todos', () => {
    const expectedTodo: Todo = MockUserService.testTodos[0];
    // Setting this should cause anyone subscribing to the paramMap
    // to update. Our `TodoProfileComponent` subscribes to that, so
    // it should update right away.
    activatedRoute.setParamMap({ id: expectedTodo._id });

    expect(component.id).toEqual(expectedTodo._id);
    expect(component.todo).toEqual(expectedTodo);
  });

  it('should navigate to correct todo when owner changes', () => {
    let expectedTodo: Todo = MockUserService.testTodos[0];
    // Setting this should cause anyone subscribing to the paramMap
    // to update. Our `TodoProfileComponent` subscribes to that, so
    // it should update right away.
    activatedRoute.setParamMap({ id: expectedTodo._id });

    expect(component.id).toEqual(expectedTodo._id);

    // Changing the paramMap should update the displayed user profile.
    expectedTodo = MockUserService.testTodos[1];
    activatedRoute.setParamMap({ id: expectedTodo._id });

    expect(component.id).toEqual(expectedTodo._id);
  });

  it('should have `null` for the todo for an invalid owner search', () => {
    activatedRoute.setParamMap({ id: 'badOwner' });

    // If the given owner doesn't map to a todo, we expect the service
    // to return `null`, so we would expect the component's todo
    // to also be `null`.
    expect(component.owner).toEqual('badOwner');
    expect(component.todo).toBeNull();
  });
});
*/
