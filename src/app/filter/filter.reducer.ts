import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: actions.validFilters = 'todos';

export const filterReducer = createReducer<actions.validFilters>(
  initialState,
  on(actions.setFilter, (state, {filter}) => filter),
);
