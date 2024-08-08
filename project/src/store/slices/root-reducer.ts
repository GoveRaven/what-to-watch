import { combineReducers } from '@reduxjs/toolkit';
import { ActionName } from '../../consts/store-action';
import { DataSlice } from './data-slice/data-slice';
import { FilmsSlice } from './films-slice/films-slice';
import { UserSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [ActionName.Data]: DataSlice.reducer,
  [ActionName.Films]: FilmsSlice.reducer,
  [ActionName.User]: UserSlice.reducer,
});
