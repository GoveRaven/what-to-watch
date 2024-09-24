import { AuthorizationStatus } from '../consts/authhorization-status';
import { SliceName } from '../consts/store-action';
import { TDataSlice, TUserSlice } from '../types/store';
import { createMockComments, createMockFilm } from './mock-creators';

export function createMockStore() {
  const mockUserSlice = createMockUserSlice();
  const mockDataSlice = createMockDataSlice();
  return {
    [SliceName.User]: mockUserSlice,
    [SliceName.Data]: mockDataSlice,
  };
}

function createMockUserSlice(): TUserSlice {
  return {
    authStatus: AuthorizationStatus.Auth,
    isAuthStatusChecked: false,
    user: null,
  };
}

function createMockDataSlice(): TDataSlice {
  const filmOne = createMockFilm();
  const filmTwo = createMockFilm();
  const filmThree = createMockFilm();
  const reviews = [createMockComments(), createMockComments()];
  return {
    promoFilm: filmOne,
    isPromoLoading: false,
    allFilms: [filmOne, filmTwo, filmThree],
    areFilmsLoading: false,
    chosenFilm: filmOne,
    isFilmLoading: false,
    similarFilms: [filmTwo, filmThree],
    areSimilarFilmsLoading: false,
    filmComments: reviews,
    areFilmCommentsLoading: false,
    favoriteFilms: [filmOne, filmTwo, filmThree],
    areFavoriteFilmsLoading: false,
  };
}
