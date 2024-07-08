import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilms,
  setFilmsLoadingStatus,
  setAuthStatus,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';

type TInitialState = {
  genre: string;
  films: TFilm[];
  allFilmsList: TFilm[];
  areFilmsLoading: boolean;
  authStatus: AuthorizationStatus;
};

const initialState: TInitialState = {
  genre: DEFAULT_GENRE,
  films: [],
  allFilmsList: [],
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
        state.films = state.allFilmsList;
      } else {
        state.films = state.allFilmsList.filter(
          (film) => film.genre === state.genre
        );
      }
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
      state.allFilmsList = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.areFilmsLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
