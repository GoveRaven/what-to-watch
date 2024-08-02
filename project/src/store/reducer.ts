import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  actualizeFilmsList,
  setFilms,
  setFilmsLoadingStatus,
  setAuthStatus,
  setChosenFilm,
  setSimilarFilms,
  setFilmComments,
  setPromoFilm,
  setPromoFilmLoadingStatus,
  setAuthStatusChecked,
  setChosenFilmLoadingStatus,
  setFilmCommentsLoadingStatus,
  setUser,
} from './actions';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { TReview } from '../types/reviews';
import { TUser } from '../types/user';

type TInitialState = {
  genre: string;
  promoFilm: TFilm | null;
  isPromoLoading: boolean;
  chosenFilm: TFilm | null;
  similarFilms: TFilm[];
  filmsByCurrentGenre: TFilm[];
  filmComments: TReview[];
  isFilmCommentLoading: boolean;
  allFilms: TFilm[];
  areFilmsLoading: boolean;
  isFilmLoading: boolean;
  authStatus: AuthorizationStatus;
  isAuthStatusChecked: boolean;
  user: null | TUser;
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
  isFilmCommentLoading: false,
  allFilms: [],
  areFilmsLoading: false,
  authStatus: AuthorizationStatus.Unknown,
  isAuthStatusChecked: false,
  user: null,
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
    .addCase(setChosenFilmLoadingStatus, (state, action) => {
      state.isFilmLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setAuthStatusChecked, (state, action) => {
      state.isAuthStatusChecked = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setFilmCommentsLoadingStatus, (state, action) => {
      state.isFilmCommentLoading = action.payload;
    });
});
