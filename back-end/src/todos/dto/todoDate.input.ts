import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class TodoDateInput {
  @Field((type) => String)
  create: string;

  @Field((type) => String, { nullable: true })
  update?: string;

  @Field((type) => String, { nullable: true })
  delete?: string;
}
