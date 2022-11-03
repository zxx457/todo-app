import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HelloDoc } from './schemas/hello.schema';
import { TodoDoc } from './schemas/todo.schema';
@Injectable()
export class TodosService {
  constructor(
    @InjectModel('todos') private readonly todoModal: Model<TodoDoc>,
    @InjectModel('hellos') private readonly helloModal: Model<HelloDoc>,
  ) {}

  async getHellos(): Promise<HelloDoc[]> {
    return this.helloModal.find().exec();
  }

  async storeHello(input: string): Promise<HelloDoc> {
    await this.helloModal.create({ word: input });
    return { word: 'hello!' } as HelloDoc;
  }
}
