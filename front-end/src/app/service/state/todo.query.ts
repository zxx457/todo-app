import { Query } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';

export class TodoQuery extends Query<TodoState> {

  todos$ = this.select('todos')

  constructor(protected override store: TodoStore) {
    super(store);
  }
}
