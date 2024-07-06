import { createAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/films';

export const changeGenre = createAction<string>('films/changeGenre');
export const actualizeFilmsList = createAction('films/actualizeFilmsList');

export const loadFilms = createAction<TFilm[]>('data/loadFilms');
export const setFilmsLoadingStatus = createAction<boolean>(
  'data/setFilmsLoadingStatus'
);
