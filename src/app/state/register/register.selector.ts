import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Register } from './register.model';

const getAll = createSelector(
  createFeatureSelector('register'),
  (state: { data: Register[] }) => state.data
);

export { getAll };
