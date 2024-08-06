import { actionName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

export const getPromoFilm = (state: TState): TFilm | null =>
  state[actionName.Data].promoFilm;

export const getIsPromoLoading = (state: TState): boolean =>
  state[actionName.Data].isPromoLoading;

export const getAllFilms = (state: TState): TFilm[] =>
  state[actionName.Data].allFilms;

export const getAreFilmsLoading = (state: TState): boolean =>
  state[actionName.Data].areFilmsLoading;

export const getChosenFilm = (state: TState): TFilm | null =>
  state[actionName.Data].chosenFilm;

export const getIsFilmLoading = (state: TState): boolean =>
  state[actionName.Data].isFilmLoading;

export const getSimilarFilms = (state: TState): TFilm[] =>
  state[actionName.Data].similarFilms;

export const getFilmComments = (state: TState): TReview[] =>
  state[actionName.Data].filmComments;

export const getIsFilmCommentLoading = (state: TState): boolean =>
  state[actionName.Data].isFilmCommentLoading;
