import { ObjectType, Field } from '@nestjs/graphql';
import { TodoDateModel } from './tododate.model';

@ObjectType({ description: 'todo item' })
export class TodoModel {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  done: boolean;

  @Field((type) => TodoDateModel)
  date: TodoDateModel;
}
