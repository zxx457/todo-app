import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { CardModule } from '../card/card.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoStateService } from 'src/app/service/state/todo.service';
import {FormsModule} from "@angular/forms"

@NgModule({
  providers: [
    TodoStateService
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
