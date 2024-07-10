import { createAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/films';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { AppRoute } from '../consts/routes';

export const changeGenre = createAction<string>('films/changeGenre');
export const actualizeFilmsList = createAction('films/actualizeFilmsList');

export const setFilms = createAction<TFilm[]>('data/setFilms');
export const setFilmsLoadingStatus = createAction<boolean>(
  'data/setFilmsLoadingStatus'
);

export const setAuthStatus =
  createAction<AuthorizationStatus>('user/setAuthStatus');

export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');
