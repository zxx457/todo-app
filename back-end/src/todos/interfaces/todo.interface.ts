export interface TodoDate {
  create: Date;
  update?: Date;
  delete?: Date;
}

export interface Todo {
  title: string;
  description?: string;
  done: boolean;
  date: TodoDate;
}
