import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { SliceName } from '../../../consts/store-action';
import { TState } from '../../../types/store';
import { TUser } from '../../../types/user';

export const selectAuthStatus = (
  state: Pick<TState, SliceName.User>
): AuthorizationStatus => state[SliceName.User].authStatus;

export const selectIsAuthStatusChecked = (
  state: Pick<TState, SliceName.User>
): boolean => state[SliceName.User].isAuthStatusChecked;

export const selectUser = (state: Pick<TState, SliceName.User>): TUser | null =>
  state[SliceName.User].user;
