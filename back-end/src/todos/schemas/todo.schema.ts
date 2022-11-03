import { Schema, SchemaFactory, Prop, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoDate } from '../interfaces/todo.interface';

export type TodoDoc = TodoSchemaClass & Document;

@Schema()
export class TodoSchemaClass {
  @Prop()
  title: string;

  @Prop({ required: false })
  description?: string;

  @Prop(Boolean)
  done: boolean;

  @Prop(
    raw({
      create: { type: Number },
      update: { type: Number, require: false },
      dalete: { type: Number, require: false },
    }),
  )
  date: TodoDate;
}

export const TodoSchema = SchemaFactory.createForClass(TodoSchemaClass);
