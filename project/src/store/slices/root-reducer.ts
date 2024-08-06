import { combineReducers } from '@reduxjs/toolkit';
import { actionName } from '../../consts/store-action';
import { DataSlice } from './data-slice/data-slice';
import { FilmsSlice } from './films-slice/films-slice';
import { UserSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [actionName.Data]: DataSlice.reducer,
  [actionName.Films]: FilmsSlice.reducer,
  [actionName.User]: UserSlice.reducer,
});
