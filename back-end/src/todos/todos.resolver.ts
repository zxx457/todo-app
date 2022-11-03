import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HelloModel } from './models/hello.model';
import { TodoModel } from './models/todo.model';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {
  constructor(private readonly service: TodosService) {}

  @Query((returns) => [HelloModel])
  hellos() {
    return this.service.getHellos();
  }

  @Mutation((returns) => HelloModel)
  storeHello(@Args('input') input: string) {
    return this.service.storeHello(input);
  }

  @Query((returns) => [TodoModel])
  todos() {
    return [];
  }
}
