import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    TodoCardComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
