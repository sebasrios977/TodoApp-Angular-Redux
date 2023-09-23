import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public currentFilter!: actions.validFilters;
  public filters: actions.validFilters[] = ['todos', 'completados', 'pendientes'];
  public pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
    .subscribe( state => {
      this.currentFilter = state.filter;

      this.pending = state.todos.filter( todo => !todo.completado).length;
    });

  }

  cambiarFiltro(filter: actions.validFilters) {
    this.store.dispatch( actions.setFilter({filter: filter}) )
  }

  eliminarCompletado() {
    this.store.dispatch( deleteCompleted() );
  }



}
