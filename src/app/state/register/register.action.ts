import { createAction, props } from '@ngrx/store';
import { Register } from './register.model';

enum RegisterAction {
  ADD_ACTION = '[ADD Action]',
}

const addAction = createAction(
  RegisterAction.ADD_ACTION,
  props<{ payload: Register }>()
);

export { addAction };
