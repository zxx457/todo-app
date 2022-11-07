import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Todo } from 'src/app/interface/todo.interface';
import { TodoStateService } from 'src/app/service/state/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  public todos$: Observable<Todo[]>;

  private destroy$ = new Subject<void>();
  private loading$ = new BehaviorSubject<boolean>(true);

  constructor(private todoService: TodoStateService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$().pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
