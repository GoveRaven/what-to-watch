import { internet } from 'faker';
import { TUser } from '../types/user';

export function createMockUser(): TUser {
  return {
    avatarUrl: internet.avatar(),
    email: internet.email(),
    id: Math.round(Math.random() * (100 - 1) + 1),
    name: internet.userName(),
    token: internet.ip(),
  };
}
