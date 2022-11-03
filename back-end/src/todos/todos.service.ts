import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoInput } from './dto/todo.input';
import { Hello } from './interfaces/hello.interface';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel('todos') private readonly todoModal: Model<Todo>,
    @InjectModel('hellos') private readonly helloModal: Model<Hello>,
  ) {}

  async getHellos(): Promise<Hello[]> {
    return this.helloModal.find().exec();
  }

  async storeHello(input: string): Promise<Hello> {
    await this.helloModal.create({ word: input });
    return { word: 'hello!' };
  }

  async getTodos(): Promise<Todo[]> {
    return this.todoModal.find().exec();
  }

  async createTodos(item: TodoInput): Promise<Todo> {
    await this.todoModal.create(item);
    return {title: "hello"} as Todo
  }
}
