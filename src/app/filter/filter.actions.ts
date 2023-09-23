import { createAction, props } from '@ngrx/store';

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
  '[Filter] Set',
  props<{filter: validFilters}>(),
);

