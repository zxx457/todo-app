import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interface/todo.interface';
import { TodoGqlService } from '../net/todogql.service';
import { TodoQuery } from './todo.query';
import { TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoStateService {
  constructor(
    private readonly store: TodoStore,
    private readonly gql: TodoGqlService,
    private readonly query: TodoQuery
  ) {}

  async addTodo(item: Todo) {
    this.store.setLoading(true);

    try {
      await this.gql.addTodo(item);

      this.store.update((state) => ({
        todos: [...state.todos, item],
      }));
    } catch (err: any) {
      console.error("todo didn't added errors -> ", err);
      this.store.setLoading(false);
    }

    this.store.setLoading(false);
  }

  private watchTodos() {
    this.gql.queryTodos$().subscribe({
      next: (result) => {
        this.store.update((state) => ({
          todos: result.data,
        }));
      },
      error: (err: any) => {
        throw new Error('something wrong when query the todo list');
      },
      complete: () => {
        console.log('watch todo list query end...');
      },
    });
  }
  todos$() {
    this.watchTodos();

    return this.query.todos$;
  }
}
