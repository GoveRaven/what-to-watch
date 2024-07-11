import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilmsList,
  setFilmsLoadingStatus,
  setAuthStatus,
  setSingleFilm,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';

type TInitialState = {
  genre: string;
  singleFilm: TFilm | null;
  filmsByGenre: TFilm[];
  allFilms: TFilm[];
  areFilmsLoading: boolean;
  authStatus: AuthorizationStatus;
};

const initialState: TInitialState = {
  genre: DEFAULT_GENRE,
  singleFilm: null,
  filmsByGenre: [],
  allFilms: [],
  areFilmsLoading: false,
  authStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(actualizeFilmsList, (state) => {
      if (state.genre === DEFAULT_GENRE) {
        state.filmsByGenre = state.allFilms;
      } else {
        state.filmsByGenre = state.allFilms.filter(
          (film) => film.genre === state.genre
        );
      }
    })
    .addCase(setFilmsList, (state, action) => {
      state.filmsByGenre = action.payload;
      state.allFilms = action.payload;
    })
    .addCase(setSingleFilm, (state, action) => {
      state.singleFilm = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.areFilmsLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
