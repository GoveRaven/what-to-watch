import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilmsList,
  setFilmsLoadingStatus,
  setAuthStatus,
  setSingleFilm,
  setFilmLoadingStatus,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';

type TInitialState = {
  genre: string;
  singleFilm: TFilm | null;
  filmsByCurrentGenre: TFilm[];
  allFilms: TFilm[];
  areFilmsLoading: boolean;
  isFilmLoading: boolean;
  authStatus: AuthorizationStatus;
};

const initialState: TInitialState = {
  genre: DEFAULT_GENRE,
  singleFilm: null,
  filmsByCurrentGenre: [],
  allFilms: [],
  areFilmsLoading: false,
  isFilmLoading: false,
  authStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(actualizeFilmsList, (state) => {
      if (state.genre === DEFAULT_GENRE) {
        state.filmsByCurrentGenre = state.allFilms;
      } else {
        state.filmsByCurrentGenre = state.allFilms.filter(
          (film) => film.genre === state.genre
        );
      }
    })
    .addCase(setFilmsList, (state, action) => {
      state.filmsByCurrentGenre = action.payload;
      state.allFilms = action.payload;
    })
    .addCase(setSingleFilm, (state, action) => {
      state.singleFilm = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.areFilmsLoading = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
