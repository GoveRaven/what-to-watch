import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { actionName } from '../../../consts/store-action';
import { authLogin, authLogout, checkAuth } from '../../api-action';
import { TUserSlice } from '../../../types/store';

const initialState: TUserSlice = {
  authStatus: AuthorizationStatus.Unknown,
  isAuthStatusChecked: false,
  user: null,
};

export const UserSlice = createSlice({
  name: actionName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.isAuthStatusChecked = true;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isAuthStatusChecked = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(authLogin.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});
