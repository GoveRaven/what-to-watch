import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { SliceName } from '../../../consts/store-action';
import { TState } from '../../../types/store';
import { TUser } from '../../../types/user';

type TUserState = Pick<TState, SliceName.User>;

export const selectAuthStatus = (
  state: TUserState
): AuthorizationStatus => state[SliceName.User].authStatus;

export const selectIsAuthStatusChecked = (
  state: TUserState
): boolean => state[SliceName.User].isAuthStatusChecked;

export const selectUser = (state: TUserState): TUser | null =>
  state[SliceName.User].user;
