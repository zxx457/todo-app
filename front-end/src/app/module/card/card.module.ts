import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';



@NgModule({
  declarations: [
    TodoCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoCardComponent
  ]
})
export class CardModule { }
