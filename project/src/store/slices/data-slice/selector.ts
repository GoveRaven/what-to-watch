import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TReview } from '../../../types/reviews';
import { TState } from '../../../types/store';

type TDataState = Pick<TState, SliceName.Data>;

export const selectPromoFilm = (
  state: TDataState
): TFilm | null => state[SliceName.Data].promoFilm;

export const selectIsPromoLoading = (
  state: TDataState
): boolean => state[SliceName.Data].isPromoLoading;

export const selectAllFilms = (state: TDataState): TFilm[] =>
  state[SliceName.Data].allFilms;

export const selectAreFilmsLoading = (
  state: TDataState
): boolean => state[SliceName.Data].areFilmsLoading;

export const selectChosenFilm = (
  state: TDataState
): TFilm | null => state[SliceName.Data].chosenFilm;

export const selectIsFilmLoading = (
  state: TDataState
): boolean => state[SliceName.Data].isFilmLoading;

export const selectSimilarFilms = (
  state: TDataState
): TFilm[] => state[SliceName.Data].similarFilms;

export const selectisSimilarFilmsLoading = (
  state: TDataState
): boolean => state[SliceName.Data].isSimilarFilmsLoading;

export const selectFilmComments = (
  state: TDataState
): TReview[] => state[SliceName.Data].filmComments;

export const selectAreFilmCommentsLoading = (
  state: TDataState
): boolean => state[SliceName.Data].areFilmCommentsLoading;

export const selectFavoriteFilms = (
  state: TDataState
): TFilm[] => state[SliceName.Data].favoriteFilms;

export const selectAreFavoriteFilmsLoading = (
  state: TDataState
): boolean => state[SliceName.Data].areFavoriteFilmsLoading;
