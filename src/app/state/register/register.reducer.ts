import { createReducer, on } from '@ngrx/store';
import { addAction } from './register.action';

const data: string[] = [];

const initState = {
  data,
};

const registerReducer = createReducer(
  initState,
  on(addAction, (state, { payload }) => {
    const newData = [...state.data, payload];
    return {
      ...state,
      data: newData,
    };
  })
);

export { registerReducer };
