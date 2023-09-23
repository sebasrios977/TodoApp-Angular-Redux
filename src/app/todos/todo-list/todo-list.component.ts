import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  public todos: Todo[] = [];
  public currentFilter!: validFilters;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('todos')
    // .subscribe( (todos) => this.todos = todos);

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    })
  }

}
