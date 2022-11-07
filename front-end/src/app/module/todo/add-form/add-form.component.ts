import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interface/todo.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  @Output('add') addEvent = new EventEmitter<Todo>();

  input: string;

  ngOnInit(): void {}

  onKeyboardEnter() {
    if (!this.input) return;

    const input = this.input;
    this.clear();

    this.add({
      title: input,
      description: '',
      done: false,
      date: {
        create: Date.now().toString(),
      },
    });
  }

  private add(item: Todo) {
    this.addEvent.emit(item);
  }

  private clear() {
    this.input = '';
  }
}
