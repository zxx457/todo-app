import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HelloDoc = HelloSchemaClass & Document;

@Schema()
export class HelloSchemaClass {
  @Prop()
  word: string;
}

export const HelloSchema = SchemaFactory.createForClass(HelloSchemaClass);
