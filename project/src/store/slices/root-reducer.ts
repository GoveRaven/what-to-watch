import { combineReducers } from '@reduxjs/toolkit';
import { ActionName } from '../../consts/store-action';
import { dataSlice } from './data-slice/data-slice';
import { filmsSlice } from './films-slice/films-slice';
import { userSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [ActionName.Data]: dataSlice.reducer,
  [ActionName.Films]: filmsSlice.reducer,
  [ActionName.User]: userSlice.reducer,
});
