import { Resolver, Query } from '@nestjs/graphql';
import { TodoModel } from './models/todo.model';

@Resolver()
export class TodosResolver {
  @Query((returns) => String)
  hello() {
    return 'hello';
  }

  @Query((returns) => [TodoModel])
  todos() {
    return [];
  }
}
