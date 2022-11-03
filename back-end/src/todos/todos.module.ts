import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/todo.schema';
import { HelloSchema } from './schemas/hello.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'todos', schema: TodoSchema },
      { name: 'hellos', schema: HelloSchema },
    ]),
  ],
  providers: [TodosResolver, TodosService],
})
export class TodosModule {}
