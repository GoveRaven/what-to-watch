import { createAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { AppRoute } from '../consts/routes';
import { TReview } from '../types/reviews';

export const changeGenre = createAction<string>('films/changeGenre');
export const actualizeFilmsList = createAction('films/actualizeFilmsList');

export const setPromoFilm = createAction<TFilm>('data/setPromoFilm');
export const setPromoFilmLoadingStatus = createAction<boolean>(
  'data/setPromoFilmLoadingStatus'
);
export const setFilms = createAction<TFilm[]>('data/setFilms');
export const setFilmsLoadingStatus = createAction<boolean>(
  'data/setFilmsLoadingStatus'
);
export const setChosenFilm = createAction<TFilm>('data/setChosenFilm');
export const setChosenFilmLoadingStatus = createAction<boolean>(
  'data/setChosenFilmLoadingStatus'
);
export const setSimilarFilms = createAction<TFilm[]>('data/setSimilarFilms');
export const setFilmComments = createAction<TReview[]>('data/setFilmComments');
export const setFilmCommentsLoadingStatus = createAction<boolean>(
  'data/setFilmCommentsLoadingStatus'
);

export const setAuthStatus =
  createAction<AuthorizationStatus>('user/setAuthStatus');
export const setAuthStatusChecked = createAction<boolean>(
  'user/setAuthStatusChecked'
);

export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');
