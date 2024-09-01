import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

export const selectPromoFilm = (
  state: Pick<TState, SliceName.Data>
): TFilm | null => state[SliceName.Data].promoFilm;

export const selectIsPromoLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].isPromoLoading;

export const selectAllFilms = (state: Pick<TState, SliceName.Data>): TFilm[] =>
  state[SliceName.Data].allFilms;

export const selectAreFilmsLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].areFilmsLoading;

export const selectChosenFilm = (
  state: Pick<TState, SliceName.Data>
): TFilm | null => state[SliceName.Data].chosenFilm;

export const selectIsFilmLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].isFilmLoading;

export const selectSimilarFilms = (
  state: Pick<TState, SliceName.Data>
): TFilm[] => state[SliceName.Data].similarFilms;

export const selectisSimilarFilmsLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].isSimilarFilmsLoading;

export const selectFilmComments = (
  state: Pick<TState, SliceName.Data>
): TReview[] => state[SliceName.Data].filmComments;

export const selectAreFilmCommentsLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].areFilmCommentsLoading;

export const selectFavoriteFilms = (
  state: Pick<TState, SliceName.Data>
): TFilm[] => state[SliceName.Data].favoriteFilms;

export const selectAreFavoriteFilmsLoading = (
  state: Pick<TState, SliceName.Data>
): boolean => state[SliceName.Data].areFavoriteFilmsLoading;
