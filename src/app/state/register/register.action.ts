import { createAction, props } from '@ngrx/store';

enum RegisterAction {
  ADD_ACTION = '[ADD Action]',
}

const addAction = createAction(
  RegisterAction.ADD_ACTION,
  props<{ payload: string }>()
);

export { addAction };
