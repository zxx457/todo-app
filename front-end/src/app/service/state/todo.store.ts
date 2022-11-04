import { Store, StoreConfig } from '@datorama/akita';
import { Todo } from 'src/app/interface/todo.interface';

export interface TodoState {
  todos: Todo[];
}

function createInitialState(): TodoState {
  return {
    todos: [],
  };
}

@StoreConfig({ name: 'todo' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(createInitialState());
  }
}
