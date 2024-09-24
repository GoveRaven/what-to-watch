import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { SliceName } from '../../../consts/store-action';
import { TUserSlice } from '../../../types/store';
import { authLogout, checkAuth } from '../../api-action';
import {
  selectAuthStatus,
  selectIsAuthStatusChecked,
  selectUser,
} from './selector';
import { userSlice } from './user-slice';
import { createMockUser } from '../../../utils/mock-creators';

describe('User selectors', () => {
  let state: TUserSlice;

  beforeEach(() => {
    state = {
      authStatus: AuthorizationStatus.Unknown,
      isAuthStatusChecked: false,
      user: null,
    };
  });

  it('should return authorization status from store', () => {
    const currentAthStatus = AuthorizationStatus.Auth;
    state.authStatus = currentAthStatus;
    const result = selectAuthStatus({
      [SliceName.User]: state,
    });

    expect(result).toBe(currentAthStatus);
  });

  describe('should return is auth status checked', () => {
    it('should return false', () => {
      const result = selectIsAuthStatusChecked({ [SliceName.User]: state });
      expect(result).toBe(false);
    });

    it('should return true', () => {
      state = userSlice.reducer(state, checkAuth.fulfilled);
      const result = selectIsAuthStatusChecked({
        [SliceName.User]: state,
      });
      expect(result).toBe(true);
    });
  });

  describe('should return user', () => {
    it('should return null', () => {
      const result = selectUser({ [SliceName.User]: state });
      expect(result).toBe(null);
    });

    it('should return object', () => {
      const currentUser = createMockUser();
      state.user = currentUser;
      const result = selectUser({ [SliceName.User]: state });

      expect(result).toBe(currentUser);
    });

    it('should return null after logout', () => {
      const currentUser = createMockUser();
      state.user = currentUser;
      state = userSlice.reducer(state, authLogout.fulfilled);
      const result = selectUser({ [SliceName.User]: state });
      expect(result).toBe(null);
    });
  });
});
