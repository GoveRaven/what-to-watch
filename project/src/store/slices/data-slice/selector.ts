import { ActionName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

export const selectPromoFilm = (state: TState): TFilm | null =>
  state[ActionName.Data].promoFilm;

export const selectIsPromoLoading = (state: TState): boolean =>
  state[ActionName.Data].isPromoLoading;

export const selectAllFilms = (state: TState): TFilm[] =>
  state[ActionName.Data].allFilms;

export const selectAreFilmsLoading = (state: TState): boolean =>
  state[ActionName.Data].areFilmsLoading;

export const selectChosenFilm = (state: TState): TFilm | null =>
  state[ActionName.Data].chosenFilm;

export const selectIsFilmLoading = (state: TState): boolean =>
  state[ActionName.Data].isFilmLoading;

export const selectSimilarFilms = (state: TState): TFilm[] =>
  state[ActionName.Data].similarFilms;

export const selectFilmComments = (state: TState): TReview[] =>
  state[ActionName.Data].filmComments;

export const selectIsFilmCommentsLoading = (state: TState): boolean =>
  state[ActionName.Data].isFilmCommentLoading;

export const selectFavoriteFilms = (state: TState): TFilm[] =>
  state[ActionName.Data].favoriteFilms;
