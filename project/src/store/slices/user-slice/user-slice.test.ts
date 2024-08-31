import { internet } from 'faker';
import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { TUser } from '../../../types/user';
import { authLogin, authLogout, checkAuth } from '../../api-action';
import { userSlice } from './user-slice';

describe('User slice', () => {
  it('should set "authStatus" to "Auth", "isAuthStatusChecked" to "true", "user" to "null"', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.Auth,
      isAuthStatusChecked: true,
      user: null,
    };
    const result = userSlice.reducer(undefined, checkAuth.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "NoAuth", "isAuthStatusChecked" to "true", "user" to "null" after checkAuth.rejected', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      isAuthStatusChecked: true,
      user: null,
    };
    const result = userSlice.reducer(undefined, checkAuth.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "Auth", "isAuthStatusChecked" to "true", "user" to "object"', () => {
    const currentUser: TUser = {
      avatarUrl: internet.avatar(),
      email: internet.email(),
      id: Math.round(Math.random() * (100 - 1) + 1),
      name: internet.userName(),
      token: internet.ip(),
    };
    const userRequest = {
      email: internet.email(),
      password: internet.password(),
    };
    const expectedState = {
      authStatus: AuthorizationStatus.Auth,
      isAuthStatusChecked: true,
      user: currentUser,
    };
    const result = userSlice.reducer(
      undefined,
      authLogin.fulfilled(currentUser, '', userRequest)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "NoAuth", "isAuthStatusChecked" to "true", "user" to "null" after authLogin.rejected', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      isAuthStatusChecked: true,
      user: null,
    };
    const result = userSlice.reducer(undefined, authLogin.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "NoAuth", "isAuthStatusChecked" to "true", "user" to "null" after authLogin.rejected after authLogout', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      isAuthStatusChecked: true,
      user: null,
    };
    const result = userSlice.reducer(undefined, authLogout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
