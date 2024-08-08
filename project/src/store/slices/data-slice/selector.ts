import { actionName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

export const selectPromoFilm = (state: TState): TFilm | null =>
  state[actionName.Data].promoFilm;

export const selectIsPromoLoading = (state: TState): boolean =>
  state[actionName.Data].isPromoLoading;

export const selectAllFilms = (state: TState): TFilm[] =>
  state[actionName.Data].allFilms;

export const selectAreFilmsLoading = (state: TState): boolean =>
  state[actionName.Data].areFilmsLoading;

export const selectChosenFilm = (state: TState): TFilm | null =>
  state[actionName.Data].chosenFilm;

export const selectIsFilmLoading = (state: TState): boolean =>
  state[actionName.Data].isFilmLoading;

export const selectSimilarFilms = (state: TState): TFilm[] =>
  state[actionName.Data].similarFilms;

export const selectFilmComments = (state: TState): TReview[] =>
  state[actionName.Data].filmComments;

export const selectIsFilmCommentLoading = (state: TState): boolean =>
  state[actionName.Data].isFilmCommentLoading;
