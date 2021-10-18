import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contact-actions';

export const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});
