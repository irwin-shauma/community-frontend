import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAll = createSelector(
  createFeatureSelector('app'),
  (state: { data: string[] }) => state.data
);

export { getAll };
