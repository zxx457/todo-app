import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interface/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input('todos') todos$: Observable<Todo[]>;

  @Output('modify') modify = new EventEmitter<Todo>();
  @Output('delete') delete = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  onCheckboxChange(done: boolean, item: Todo) {
    this.onTodoChange({
      ...item,
      done,
    });
  }

  onTodoChange(item: Todo) {
    this.modify.emit(item);
  }
}
