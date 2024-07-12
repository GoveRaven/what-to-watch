import { createAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { AppRoute } from '../consts/routes';

export const changeGenre = createAction<string>('films/changeGenre');
export const actualizeFilmsList = createAction('films/actualizeFilmsList');

export const setFilmsList = createAction<TFilm[]>('data/setFilmsList');
export const setFilmsLoadingStatus = createAction<boolean>(
  'data/setFilmsLoadingStatus'
);
export const setSingleFilm = createAction<TFilm>('data/setSingleFilm');
export const setFilmLoadingStatus = createAction<boolean>(
  'data/setFilmLoadingStatus'
);
export const setSimilarFilms = createAction<TFilm[]>('data/setSimilarFilms');

export const setAuthStatus =
  createAction<AuthorizationStatus>('user/setAuthStatus');

export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');
