export interface TodoDate {
  //unix ms timestamp
  create: string;
  update?: string;
  delete?: string;
}

export interface Todo {
  id?: string;
  title: string;
  description?: string;
  done: boolean;
  date: TodoDate;
}

export interface QueryTodo {
  todos: Todo[]
}
