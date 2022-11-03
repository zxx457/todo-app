import { InputType, Field } from '@nestjs/graphql';
import { TodoDateInput } from './todoDate.input';

@InputType({ description: 'todo item input' })
export class TodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  done: boolean;

  @Field(type => TodoDateInput)
  date: TodoDateInput;
}
