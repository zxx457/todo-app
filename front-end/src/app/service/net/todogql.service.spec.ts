import { Todo } from 'src/app/interface/todo.interface';
import { TodoGqlService } from './todogql.service';
import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from 'src/app/graphql.module';
import { HttpClientModule } from '@angular/common/http';

describe('test todo graphql service', () => {
  let todoItem: Todo;
  let gqlService: TodoGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule],
      providers: [TodoGqlService, Apollo],
    });
    gqlService = TestBed.inject(TodoGqlService);
  });

  beforeEach(() => {
    todoItem = {
      title: (Math.random() * 10000).toString(),
      description: 'desc',
      date: {
        create: Date.now().toString(),
      },
      done: false,
    };
  });

  it('should watch all todos, and emit when todo changes', async () => {
    gqlService.queryTodos$().subscribe({
      next: (result) => {
        console.log("new msg  ++++++++++++++++++++++++++++++ ")
        expect(result).toBeTruthy();
      },
    });
  });

  it('should add todo', async () => {
    const result = await gqlService.addTodo(todoItem);
    expect(result).not.toBeUndefined();
  });

  it('should query all todos', async () => {
    const result = await gqlService.queryTodos();
    expect(result.length).not.toBe(0);
  });
});
