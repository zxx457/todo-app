import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: "todo item's date info" })
export class TodoDateModel {
  @Field()
  create: string;

  @Field({ nullable: true })
  update?: string;

  @Field({ nullable: true })
  delete?: string;
}
