import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../../consts/store-action';
import { dataSlice } from './data-slice/data-slice';
import { userSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [SliceName.Data]: dataSlice.reducer,
  [SliceName.User]: userSlice.reducer,
});
