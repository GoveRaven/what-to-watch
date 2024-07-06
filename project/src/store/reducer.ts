import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilms,
  setFilmsLoadingStatus,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';

type TInitialState = {
  genre: string;
  films: TFilm[];
  defaultFilmsList: TFilm[];
  areFilmsLoading: boolean;
  AuthStatus: AuthorizationStatus;
};

const initialState: TInitialState = {
  genre: DEFAULT_GENRE,
  films: [],
  defaultFilmsList: [],
  areFilmsLoading: false,
  AuthStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(actualizeFilmsList, (state) => {
      if (state.genre === DEFAULT_GENRE) {
        state.films = state.defaultFilmsList;
      } else {
        state.films = state.defaultFilmsList.filter(
          (film) => film.genre === state.genre
        );
      }
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
      state.defaultFilmsList = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.areFilmsLoading = action.payload;
    });
});
