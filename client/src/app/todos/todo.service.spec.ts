import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('Todo: ', () => {
  // A small collection of test todos
  const testTodos: Todo[] = [
    {
      _id: '58895985a22c04e761776d54',
      owner: 'Blanche',
      status: false,
      body: 'In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.',
      category: 'software design'
    },
    {
      _id: '58895985c1849992336c219b',
      owner: 'Fry',
      status: false,
      body: 'Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.',
      category: 'video games'
    },
    {
      _id: '58895985ae3b752b124e7663',
      owner: 'Fry',
      status: true,
      body: 'Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.',
      category: 'homework'
    }
  ];
  let todoService: TodoService;
  // These are used to mock the HTTP requests so that we (a) don't have to
  // have the server running and (b) we can check exactly which HTTP
  // requests were made to ensure that we're making the correct requests.
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    // Set up the mock handling of the HTTP requests
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    // Construct an instance of the service with the mock
    // HTTP client.
    todoService = new TodoService(httpClient);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('getTodos() calls api/todos', () => {
    // Assert that the users we get from this call to getTodos()
    // should be our set of test users. Because we're subscribing
    // to the result of getUsers(), this won't actually get
    // checked until the mocked HTTP request 'returns' a response.
    // This happens when we call req.flush(testUsers) a few lines
    // down.
    todoService.getTodos().subscribe(
      todos => expect(todos).toBe(testTodos)
    );

    // Specify that (exactly) one request will be made to the specified URL.
    const req = httpTestingController.expectOne(todoService.todoUrl);
    // Check that the request made to that URL was a GET request.
    expect(req.request.method).toEqual('GET');
    // Specify the content of the response to that request. This
    // triggers the subscribe above, which leads to that check
    // actually being performed.
    req.flush(testTodos);
  });

  /*
  it('getUsers() calls api/users with filter parameter \'admin\'', () => {

    userService.getUsers({ role: 'admin' }).subscribe(
      users => expect(users).toBe(testUsers)
    );

    // Specify that (exactly) one request will be made to the specified URL with the role parameter.
    const req = httpTestingController.expectOne(
      (request) => request.url.startsWith(userService.userUrl) && request.params.has('role')
    );

    // Check that the request made to that URL was a GET request.
    expect(req.request.method).toEqual('GET');

    // Check that the role parameter was 'admin'
    expect(req.request.params.get('role')).toEqual('admin');

    req.flush(testUsers);
  });

  it('getUsers() calls api/users with filter parameter \'age\'', () => {

    userService.getUsers({ age: 25 }).subscribe(
      users => expect(users).toBe(testUsers)
    );

    // Specify that (exactly) one request will be made to the specified URL with the role parameter.
    const req = httpTestingController.expectOne(
      (request) => request.url.startsWith(userService.userUrl) && request.params.has('age')
    );

    // Check that the request made to that URL was a GET request.
    expect(req.request.method).toEqual('GET');

    // Check that the role parameter was 'admin'
    expect(req.request.params.get('age')).toEqual('25');

    req.flush(testUsers);
  });

  it('getUsers() calls api/users with multiple filter parameters', () => {

    userService.getUsers({ role: 'editor', company: 'IBM', age: 37 }).subscribe(
      users => expect(users).toBe(testUsers)
    );

    // Specify that (exactly) one request will be made to the specified URL with the role parameter.
    const req = httpTestingController.expectOne(
      (request) => request.url.startsWith(userService.userUrl)
        && request.params.has('role') && request.params.has('company') && request.params.has('age')
    );

    // Check that the request made to that URL was a GET request.
    expect(req.request.method).toEqual('GET');

    // Check that the role parameters are correct
    expect(req.request.params.get('role')).toEqual('editor');
    expect(req.request.params.get('company')).toEqual('IBM');
    expect(req.request.params.get('age')).toEqual('37');

    req.flush(testUsers);
  });

  it('getUserById() calls api/users/id', () => {
    const targetUser: User = testUsers[1];
    const targetId: string = targetUser._id;
    userService.getUserById(targetId).subscribe(
      user => expect(user).toBe(targetUser)
    );

    const expectedUrl: string = userService.userUrl + '/' + targetId;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(targetUser);
  });

  it('filterUsers() filters by name', () => {
    expect(testUsers.length).toBe(3);
    const userName = 'a';
    expect(userService.filterUsers(testUsers, { name: userName }).length).toBe(2);
  });

  it('filterUsers() filters by company', () => {
    expect(testUsers.length).toBe(3);
    const userCompany = 'UMM';
    expect(userService.filterUsers(testUsers, { company: userCompany }).length).toBe(1);
  });

  it('filterUsers() filters by name and company', () => {
    expect(testUsers.length).toBe(3);
    const userCompany = 'UMM';
    const userName = 'chris';
    expect(userService.filterUsers(testUsers, { name: userName, company: userCompany }).length).toBe(1);
  });
  */
});
