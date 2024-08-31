import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { SliceName } from '../../../consts/store-action';
import { authLogin, authLogout, checkAuth } from '../../api-action';
import { TUserSlice } from '../../../types/store';

const initialState: TUserSlice = {
  authStatus: AuthorizationStatus.Unknown,
  isAuthStatusChecked: false,
  user: null,
};

export const userSlice = createSlice({
  name: SliceName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.isAuthStatusChecked = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuthStatusChecked = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isAuthStatusChecked = true;
      })
      .addCase(authLogin.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuthStatusChecked = true;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.isAuthStatusChecked = true;
      });
  },
});
