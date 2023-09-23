import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[Todo] Add',
  props<{texto: string}>(),
);

export const toggle = createAction(
  '[Todo] Toggle',
  props<{id: number}>(),
);

export const edit = createAction(
  '[Todo] Edit',
  props<{id: number, texto: string}>(),
);

export const deleteTodo = createAction(
  '[Todo] Delete',
  props<{id: number}>(),
);

export const deleteCompleted = createAction(
  '[Todo] Delete Completed',
);

export const toggleAll = createAction(
  '[Todo] Toggle All',
  props<{completado: boolean}>(),
);

