import { TReview } from '../types/reviews';
import { TFilm } from '../types/films';
import { TUser } from '../types/user';
import { datatype, date, internet, random, name } from 'faker';
import { HistoryRouter } from '../components/history-routes/history-routes';
import { createMemoryHistory, MemoryHistory } from 'history';
import { TState } from '../types/store';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

type TMockComponentWithStore = {
  mockComponentWithStore: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

export function createMockComments(): TReview {
  return {
    comment: random.words(),
    date: date.past().toString(),
    id: datatype.number(),
    rating: datatype.number(),
    user: {
      id: datatype.number(),
      name: internet.userName(),
    },
  };
}

export function createMockFilm(): TFilm {
  return {
    id: datatype.number(),
    name: random.words(),
    posterImage: random.image(),
    previewImage: random.image(),
    backgroundImage: random.image(),
    backgroundColor: internet.color(),
    videoLink: internet.url(),
    previewVideoLink: internet.url(),
    description: random.words(),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: `${name.firstName()} ${name.lastName()}`,
    starring: [
      `${name.firstName()} ${name.lastName()}`,
      `${name.firstName()} ${name.lastName()}`,
    ],
    runTime: datatype.number(),
    genre: random.word(),
    released: datatype.number(),
    isFavorite: datatype.boolean(),
  };
}

export function createMockUser(): TUser {
  return {
    avatarUrl: internet.avatar(),
    email: internet.email(),
    id: Math.round(Math.random() * (100 - 1) + 1),
    name: internet.userName(),
    token: internet.ip(),
  };
}

export function createMockComponent(
  component: JSX.Element,
  history?: MemoryHistory
) {
  const memoryHistory = history ?? createMemoryHistory();

  return <HistoryRouter history={memoryHistory}>{component}</HistoryRouter>;
}

export function createMockComponentWithStore(
  component: JSX.Element,
  initialState: Partial<TState> = {}
): TMockComponentWithStore {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TState,
    Action<string>,
    ThunkDispatch<TState, typeof axios, Action>
  >(middleware);
  const mockStore = mockStoreCreator(initialState);

  return {
    mockComponentWithStore: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
}
