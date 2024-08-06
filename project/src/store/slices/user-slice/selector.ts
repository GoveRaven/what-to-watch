import { AuthorizationStatus } from '../../../consts/authhorization-status';
import { actionName } from '../../../consts/store-action';
import { TState } from '../../../types/store';
import { TUser } from '../../../types/user';

export const getAuthStatus = (state: TState): AuthorizationStatus =>
  state[actionName.User].authStatus;

export const getIsAuthStatusChecked = (state: TState): boolean =>
  state[actionName.User].isAuthStatusChecked;

export const getUser = (state: TState): TUser | null =>
  state[actionName.User].user;
