import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

export const selectPromoFilm = (state: TState): TFilm | null =>
  state[SliceName.Data].promoFilm;

export const selectIsPromoLoading = (state: TState): boolean =>
  state[SliceName.Data].isPromoLoading;

export const selectAllFilms = (state: TState): TFilm[] =>
  state[SliceName.Data].allFilms;

export const selectAreFilmsLoading = (state: TState): boolean =>
  state[SliceName.Data].areFilmsLoading;

export const selectChosenFilm = (state: TState): TFilm | null =>
  state[SliceName.Data].chosenFilm;

export const selectIsFilmLoading = (state: TState): boolean =>
  state[SliceName.Data].isFilmLoading;

export const selectSimilarFilms = (state: TState): TFilm[] =>
  state[SliceName.Data].similarFilms;

export const selectFilmComments = (state: TState): TReview[] =>
  state[SliceName.Data].filmComments;

export const selectAreFilmCommentsLoading = (state: TState): boolean =>
  state[SliceName.Data].areFilmCommentsLoading;

export const selectFavoriteFilms = (state: TState): TFilm[] =>
  state[SliceName.Data].favoriteFilms;
