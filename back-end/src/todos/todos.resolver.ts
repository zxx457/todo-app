import { Resolver, Query, Mutation, Args, ResolveField,Root } from '@nestjs/graphql';
import { TodoInput } from './dto/todo.input';
import { HelloModel } from './models/hello.model';
import { TodoModel } from './models/todo.model';
import { TodosService } from './todos.service';

@Resolver(of => TodoModel)
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
    return this.service.getTodos();
  }

  @Mutation((returns) => TodoModel)
  addTodo(@Args('input') input: TodoInput) {
    return this.service.createTodos(input);
  }

}
