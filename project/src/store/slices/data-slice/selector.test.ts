import { datatype, date, internet, name, random } from 'faker';
import { TFilm } from '../../../types/films';
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
  selectisSimilarFilmsLoading,
  selectPromoFilm,
  selectSimilarFilms,
} from './selector';
import { SliceName } from '../../../consts/store-action';
import { TReview } from '../../../types/reviews';

describe('data selector', () => {
  const mockFilm: TFilm = {
    id: datatype.number(),
    name: random.words(),
    posterImage: random.image(),
    previewImage: random.image(),
    backgroundImage: random.image(),
    backgroundColor: internet.color(),
    videoLink: internet.url(),
    previewVideoLink: internet.url(),
    description: random.words(),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: `${name.firstName()} ${name.lastName()}`,
    starring: [
      `${name.firstName()} ${name.lastName()}`,
      `${name.firstName()} ${name.lastName()}`,
    ],
    runTime: datatype.number(),
    genre: random.word(),
    released: datatype.number(),
    isFavorite: datatype.boolean(),
  };

  const mockComments: TReview = {
    comment: random.words(),
    date: date.past().toString(),
    id: datatype.number(),
    rating: datatype.number(),
    user: {
      id: datatype.number(),
      name: internet.userName(),
    },
  };

  const state = {
    [SliceName.Data]: {
      promoFilm: mockFilm,
      isPromoLoading: datatype.boolean(),
      allFilms: [mockFilm, mockFilm],
      areFilmsLoading: datatype.boolean(),
      chosenFilm: mockFilm,
      isFilmLoading: datatype.boolean(),
      isSimilarFilmsLoading: datatype.boolean(),
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

  it('should return isSimilarFilmsLoading', () => {
    const { isSimilarFilmsLoading } = state[SliceName.Data];
    const result = selectisSimilarFilmsLoading(state);
    expect(result).toBe(isSimilarFilmsLoading);
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
