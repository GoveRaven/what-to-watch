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
import {
  createMockComments,
  createMockFilm,
} from '../../../utils/mock-creaters';

describe('data selector', () => {
  const mockFilm = createMockFilm();

  const mockComments = createMockComments();

  const mockState = {
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
    const { promoFilm } = mockState[SliceName.Data];
    const result = selectPromoFilm(mockState);
    expect(result).toBe(promoFilm);
  });

  it('should return isPromoLoading', () => {
    const { isPromoLoading } = mockState[SliceName.Data];
    const result = selectIsPromoLoading(mockState);
    expect(result).toBe(isPromoLoading);
  });

  it('should return allFilms', () => {
    const { allFilms } = mockState[SliceName.Data];
    const result = selectAllFilms(mockState);
    expect(result).toBe(allFilms);
  });

  it('should return areFilmsLoading', () => {
    const { areFilmsLoading } = mockState[SliceName.Data];
    const result = selectAreFilmsLoading(mockState);
    expect(result).toBe(areFilmsLoading);
  });

  it('should return chosenFilm', () => {
    const { chosenFilm } = mockState[SliceName.Data];
    const result = selectChosenFilm(mockState);
    expect(result).toBe(chosenFilm);
  });

  it('should return isFilmLoading', () => {
    const { isFilmLoading } = mockState[SliceName.Data];
    const result = selectIsFilmLoading(mockState);
    expect(result).toBe(isFilmLoading);
  });

  it('should return similarFilms', () => {
    const { similarFilms } = mockState[SliceName.Data];
    const result = selectSimilarFilms(mockState);
    expect(result).toBe(similarFilms);
  });

  it('should return areSimilarFilmsLoading', () => {
    const { areSimilarFilmsLoading } = mockState[SliceName.Data];
    const result = selectAreSimilarFilmsLoading(mockState);
    expect(result).toBe(areSimilarFilmsLoading);
  });

  it('should return filmComments', () => {
    const { filmComments } = mockState[SliceName.Data];
    const result = selectFilmComments(mockState);
    expect(result).toBe(filmComments);
  });

  it('should return areFilmCommentsLoading', () => {
    const { areFilmCommentsLoading } = mockState[SliceName.Data];
    const result = selectAreFilmCommentsLoading(mockState);
    expect(result).toBe(areFilmCommentsLoading);
  });

  it('should return favoriteFilms', () => {
    const { favoriteFilms } = mockState[SliceName.Data];
    const result = selectFavoriteFilms(mockState);
    expect(result).toBe(favoriteFilms);
  });

  it('should return areFavoriteFilmsLoading', () => {
    const { areFavoriteFilmsLoading } = mockState[SliceName.Data];
    const result = selectAreFavoriteFilmsLoading(mockState);
    expect(result).toBe(areFavoriteFilmsLoading);
  });
});
