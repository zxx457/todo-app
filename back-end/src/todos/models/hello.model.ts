import {ObjectType, Field} from '@nestjs/graphql'

@ObjectType({description:"hello world ;)"})
export class HelloModel {

  @Field()
  word: string

}