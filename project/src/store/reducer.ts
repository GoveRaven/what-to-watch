import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilms,
  setFilmsLoadingStatus,
  setAuthStatus,
  setChosenFilm,
  setFilmLoadingStatus,
  setSimilarFilms,
  setFilmComments,
  setPromoFilm,
  setPromoFilmLoadingStatus,
  setAuthStatusChecked,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { TReview } from '../types/reviews';

type TInitialState = {
  genre: string;
  promoFilm: TFilm | null;
  isPromoLoading: boolean;
  chosenFilm: TFilm | null;
  similarFilms: TFilm[];
  filmsByCurrentGenre: TFilm[];
  filmComments: TReview[];
  allFilms: TFilm[];
  areFilmsLoading: boolean;
  isFilmLoading: boolean;
  authStatus: AuthorizationStatus;
  isAuthStatusChecked: boolean;
};

const initialState: TInitialState = {
  genre: DEFAULT_GENRE,
  promoFilm: null,
  isPromoLoading: false,
  chosenFilm: null,
  isFilmLoading: false,
  similarFilms: [],
  filmsByCurrentGenre: [],
  filmComments: [],
  allFilms: [],
  areFilmsLoading: false,
  authStatus: AuthorizationStatus.Unknown,
  isAuthStatusChecked: false,
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
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setPromoFilmLoadingStatus, (state, action) => {
      state.isPromoLoading = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.filmsByCurrentGenre = action.payload;
      state.allFilms = action.payload;
    })
    .addCase(setChosenFilm, (state, action) => {
      state.chosenFilm = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.areFilmsLoading = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setAuthStatusChecked, (state, action) => {
      state.isAuthStatusChecked = action.payload;
    })
    .addCase(setFilmComments, (state, action) => {
      state.filmComments = action.payload;
    });
});
