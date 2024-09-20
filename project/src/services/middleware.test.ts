import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from '@reduxjs/toolkit';
import { redirect } from './middleware';
import { TState } from '../types/store';
import { redirectToRoute } from '../store/actions';
import { AppRoute } from '../consts/routes';

const fakeHistory = {
  location: { pathname: '' },
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../components/history-routes/browser-history', () => fakeHistory);

const middleware = [redirect];
const mockStoreCreator = configureMockStore<TState, AnyAction>(middleware);
const store = mockStoreCreator();

describe('middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should redirect to "/login" with redirectRouter action', () => {
    const redirectToSignIn = redirectToRoute(AppRoute.SignIn);
    store.dispatch(redirectToSignIn);
    expect(fakeHistory.location.pathname).toBe(AppRoute.SignIn);
    expect(store.getActions()).toEqual([redirectToSignIn]);
  });

  it('should not to be redirect "/login" because bad acction', () => {
    store.dispatch({ type: 'bad_action', payload: AppRoute.SignIn });
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.SignIn);
  });
});
