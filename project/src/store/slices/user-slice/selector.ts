import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { ActionName } from '../../../consts/store-action';
import { TState } from '../../../types/store';
import { TUser } from '../../../types/user';

export const selectAuthStatus = (state: TState): AuthorizationStatus =>
  state[ActionName.User].authStatus;

export const selectIsAuthStatusChecked = (state: TState): boolean =>
  state[ActionName.User].isAuthStatusChecked;

export const selectUser = (state: TState): TUser | null =>
  state[ActionName.User].user;
