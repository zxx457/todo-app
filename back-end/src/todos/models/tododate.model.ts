import {ObjectType , Field} from '@nestjs/graphql'

@ObjectType({description: "todo item's date info"})
export class TodoDateModel {
  @Field()
  create: Date

  @Field()
  update: Date

  @Field()
  delete: Date
}