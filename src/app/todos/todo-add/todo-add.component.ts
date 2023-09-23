import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent{

  public txtInput: FormControl = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>) {}

  agregar() {
    if(!this.txtInput.valid) return;

    this.store.dispatch( actions.create({texto: this.txtInput.value}) );

    this.txtInput.reset();
  }
}
