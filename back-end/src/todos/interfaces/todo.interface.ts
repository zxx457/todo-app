export interface TodoDate {
  create: EpochTimeStamp;
  update?: EpochTimeStamp;
  delete?: EpochTimeStamp;
}

export interface Todo {
  title: string;
  description?: string;
  done: boolean;
  date: TodoDate;
}
