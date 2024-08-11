import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { SliceName } from '../../../consts/store-action';
import { TState } from '../../../types/store';
import { TUser } from '../../../types/user';

export const selectAuthStatus = (state: TState): AuthorizationStatus =>
  state[SliceName.User].authStatus;

export const selectIsAuthStatusChecked = (state: TState): boolean =>
  state[SliceName.User].isAuthStatusChecked;

export const selectUser = (state: TState): TUser | null =>
  state[SliceName.User].user;
