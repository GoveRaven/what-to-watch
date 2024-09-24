import { internet } from 'faker';
import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { authLogin, authLogout, checkAuth } from '../../api-action';
import { userSlice } from './user-slice';
import { createMockUser } from '../../../utils/mock-creators';

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

  it('should set "authStatus" to "Auth", "isAuthStatusChecked" to "false", "user" to "object"', () => {
    const mockUser = createMockUser();
    const mockUserRequest = {
      email: internet.email(),
      password: internet.password(),
    };
    const expectedState = {
      authStatus: AuthorizationStatus.Auth,
      isAuthStatusChecked: false,
      user: mockUser,
    };
    const result = userSlice.reducer(
      undefined,
      authLogin.fulfilled(mockUser, '', mockUserRequest)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "NoAuth", "isAuthStatusChecked" to "false", "user" to "null" after authLogin.rejected', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      isAuthStatusChecked: false,
      user: null,
    };
    const result = userSlice.reducer(undefined, authLogin.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authStatus" to "NoAuth", "isAuthStatusChecked" to "false", "user" to "null" after authLogin.rejected after authLogout', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      isAuthStatusChecked: false,
      user: null,
    };
    const result = userSlice.reducer(undefined, authLogout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
