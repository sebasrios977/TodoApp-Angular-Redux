import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
import { edit } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
];

export const todoReducer = createReducer<Todo[]>(
  initialState,
  on(actions.create, (state, {texto}) => [...state, new Todo( texto )]),

  on(actions.toggle, (state, {id}) => {
    return state.map( todo => {

      if(todo.id === id) {

        return {
          ...todo,
          completado: !todo.completado,
        }
      } else {
        return todo;
      }

    } );
  }),

  on(actions.edit, (state, {id, texto}) => {
    return state.map( todo => {

      if(todo.id === id) {

        return {
          ...todo,
          texto: texto,
        }
      } else {
        return todo;
      }

    } );
  }),

  on(actions.deleteTodo, (state, {id}) => {
    return state.filter((todo) => todo.id !== id);
  }),

  on(actions.deleteCompleted, (state) => {
    return state.filter((todo) => !todo.completado);
  }),

  on(actions.toggleAll, (state, {completado}) => {
    return state.map( todo => {

      return {
        ...todo,
        completado: completado,
      }
    })
  })
);
