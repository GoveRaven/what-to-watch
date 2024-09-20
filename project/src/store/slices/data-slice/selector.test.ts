import { datatype } from 'faker';
import {
  selectAllFilms,
  selectAreFavoriteFilmsLoading,
  selectAreFilmCommentsLoading,
  selectAreFilmsLoading,
  selectChosenFilm,
  selectFavoriteFilms,
  selectFilmComments,
  selectIsFilmLoading,
  selectIsPromoLoading,
  selectAreSimilarFilmsLoading,
  selectPromoFilm,
  selectSimilarFilms,
} from './selector';
import { SliceName } from '../../../consts/store-action';
import { createMockFilm } from '../../../utils/createMockFilm';
import { createMockComments } from '../../../utils/createMockComments';

describe('data selector', () => {
  const mockFilm = createMockFilm();

  const mockComments = createMockComments();

  const state = {
    [SliceName.Data]: {
      promoFilm: mockFilm,
      isPromoLoading: datatype.boolean(),
      allFilms: [mockFilm, mockFilm],
      areFilmsLoading: datatype.boolean(),
      chosenFilm: mockFilm,
      isFilmLoading: datatype.boolean(),
      areSimilarFilmsLoading: datatype.boolean(),
      similarFilms: [mockFilm, mockFilm],
      filmComments: [mockComments, mockComments],
      areFilmCommentsLoading: datatype.boolean(),
      favoriteFilms: [mockFilm, mockFilm],
      areFavoriteFilmsLoading: datatype.boolean(),
    },
  };

  it('should return promoFilm', () => {
    const { promoFilm } = state[SliceName.Data];
    const result = selectPromoFilm(state);
    expect(result).toBe(promoFilm);
  });

  it('should return isPromoLoading', () => {
    const { isPromoLoading } = state[SliceName.Data];
    const result = selectIsPromoLoading(state);
    expect(result).toBe(isPromoLoading);
  });

  it('should return allFilms', () => {
    const { allFilms } = state[SliceName.Data];
    const result = selectAllFilms(state);
    expect(result).toBe(allFilms);
  });

  it('should return areFilmsLoading', () => {
    const { areFilmsLoading } = state[SliceName.Data];
    const result = selectAreFilmsLoading(state);
    expect(result).toBe(areFilmsLoading);
  });

  it('should return chosenFilm', () => {
    const { chosenFilm } = state[SliceName.Data];
    const result = selectChosenFilm(state);
    expect(result).toBe(chosenFilm);
  });

  it('should return isFilmLoading', () => {
    const { isFilmLoading } = state[SliceName.Data];
    const result = selectIsFilmLoading(state);
    expect(result).toBe(isFilmLoading);
  });

  it('should return similarFilms', () => {
    const { similarFilms } = state[SliceName.Data];
    const result = selectSimilarFilms(state);
    expect(result).toBe(similarFilms);
  });

  it('should return areSimilarFilmsLoading', () => {
    const { areSimilarFilmsLoading } = state[SliceName.Data];
    const result = selectAreSimilarFilmsLoading(state);
    expect(result).toBe(areSimilarFilmsLoading);
  });

  it('should return filmComments', () => {
    const { filmComments } = state[SliceName.Data];
    const result = selectFilmComments(state);
    expect(result).toBe(filmComments);
  });

  it('should return areFilmCommentsLoading', () => {
    const { areFilmCommentsLoading } = state[SliceName.Data];
    const result = selectAreFilmCommentsLoading(state);
    expect(result).toBe(areFilmCommentsLoading);
  });

  it('should return favoriteFilms', () => {
    const { favoriteFilms } = state[SliceName.Data];
    const result = selectFavoriteFilms(state);
    expect(result).toBe(favoriteFilms);
  });

  it('should return areFavoriteFilmsLoading', () => {
    const { areFavoriteFilmsLoading } = state[SliceName.Data];
    const result = selectAreFavoriteFilmsLoading(state);
    expect(result).toBe(areFavoriteFilmsLoading);
  });
});
