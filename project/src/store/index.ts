import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { redirect } from '../services/middleware';
import { rootReducer } from './slices/root-reducer';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }).concat(redirect),
});
