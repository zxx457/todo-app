import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { map } from 'rxjs';
import { ADD_TODO } from 'src/app/service/net/gql/mutate.todos';
import { GET_ALL_TODOS } from 'src/app/service/net/gql/query.todos';
import { QueryTodo, Todo } from 'src/app/interface/todo.interface';
import { NetBase } from './net.base';

@Injectable({ providedIn: 'root' })
export class TodoGqlService extends NetBase {
  constructor(private readonly apollo: Apollo) {
    super();
  }

  addTodo(input: Todo) {
    return new Promise<Partial<Todo>>((resolve, reject) => {
      this.apollo
        .mutate<Todo>({
          mutation: ADD_TODO,
          variables: {
            input,
          },
        })
        .subscribe({
          next: (result) => {
            result.data ? resolve(result.data) : reject('add empty return');
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  queryTodos$() {
    return this.apollo
      .watchQuery<Todo[]>({
        query: GET_ALL_TODOS,
      })
      .valueChanges.pipe(
        map((value) => {
          return value.data;
        })
      );
  }

  queryTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      this.apollo
        .query<QueryTodo>({
          query: GET_ALL_TODOS,
        })
        .subscribe({
          next: (result) => {
            resolve(result.data.todos);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }
}
