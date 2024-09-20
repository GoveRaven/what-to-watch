import { datatype } from 'faker';
import { TDataSlice } from '../../../types/store';
import {
  fetchChosenFilm,
  fetchFavoriteFilms,
  fetchFilmComment,
  fetchFilmList,
  fetchPromoFilm,
  fetchSimilarFilms,
} from '../../api-action';
import { dataSlice } from './data-slice';
import { createMockComments, createMockFilm } from '../../../utils/mockcreaters';

describe('data slice', () => {
  let state: TDataSlice;

  const mockFilm = createMockFilm();

  const mockComments = createMockComments();

  beforeEach(() => {
    state = {
      promoFilm: null,
      isPromoLoading: false,
      allFilms: [],
      areFilmsLoading: false,
      chosenFilm: null,
      isFilmLoading: false,
      similarFilms: [],
      areSimilarFilmsLoading: false,
      filmComments: [],
      areFilmCommentsLoading: false,
      favoriteFilms: [],
      areFavoriteFilmsLoading: false,
    };
  });

  it('should set "isPromoLoading" to "true"', () => {
    state.isPromoLoading = true;
    const result = dataSlice.reducer(state, fetchPromoFilm.pending);
    expect(result).toEqual(state);
  });

  it('should set "isPromoLoading" to "false", "promoFilm" to film object', () => {
    state.isPromoLoading = false;
    state.promoFilm = mockFilm;
    const result = dataSlice.reducer(
      state,
      fetchPromoFilm.fulfilled(mockFilm, '', undefined)
    );
    expect(result).toEqual(state);
  });

  it('should set "areFilmsLoading" to "true"', () => {
    state.areFilmsLoading = true;
    const result = dataSlice.reducer(state, fetchFilmList.pending);
    expect(result).toEqual(state);
  });

  it('should set "areFilmsLoading" to "false", "allFilms" to array with films', () => {
    state.areFilmsLoading = false;
    state.allFilms = [mockFilm, mockFilm];
    const result = dataSlice.reducer(
      state,
      fetchFilmList.fulfilled([mockFilm, mockFilm], '', undefined)
    );
    expect(result).toEqual(state);
  });

  it('should set "isFilmLoading" to "true"', () => {
    state.isFilmLoading = true;
    const result = dataSlice.reducer(state, fetchChosenFilm.pending);
    expect(result).toEqual(state);
  });

  it('should set "isFilmLoading" to "false", "chosenFilm" to film object', () => {
    state.isFilmLoading = false;
    state.chosenFilm = mockFilm;
    const result = dataSlice.reducer(
      state,
      fetchChosenFilm.fulfilled(mockFilm, '', datatype.number())
    );
    expect(result).toEqual(state);
  });

  it('should set "areSimilarFilmsLoading" to "true"', () => {
    state.areSimilarFilmsLoading = true;
    const result = dataSlice.reducer(state, fetchSimilarFilms.pending);
    expect(result).toEqual(state);
  });

  it('should set "areSimilarFilmsLoading" to "false", "similarFilms" to film object', () => {
    state.areSimilarFilmsLoading = false;
    state.similarFilms = [mockFilm, mockFilm];
    const result = dataSlice.reducer(
      state,
      fetchSimilarFilms.fulfilled([mockFilm, mockFilm], '', datatype.number())
    );
    expect(result).toEqual(state);
  });

  it('should set "areFilmCommentsLoading" to "true"', () => {
    state.areFilmCommentsLoading = true;
    const result = dataSlice.reducer(state, fetchFilmComment.pending);
    expect(result).toEqual(state);
  });

  it('should set "areFilmCommentsLoading" to "false", "filmComments" to comments array', () => {
    state.areFilmCommentsLoading = false;
    state.filmComments = [mockComments, mockComments];
    const result = dataSlice.reducer(
      state,
      fetchFilmComment.fulfilled(
        [mockComments, mockComments],
        '',
        datatype.number()
      )
    );
    expect(result).toEqual(state);
  });

  it('should set "areFavoriteFilmsLoading" to "true"', () => {
    state.areFavoriteFilmsLoading = true;
    const result = dataSlice.reducer(state, fetchFavoriteFilms.pending);
    expect(result).toEqual(state);
  });

  it('should set "areFavoriteFilmsLoading" to "false", "favoriteFilms" to films array', () => {
    state.areFavoriteFilmsLoading = false;
    state.favoriteFilms = [mockFilm, mockFilm];
    const result = dataSlice.reducer(
      state,
      fetchFavoriteFilms.fulfilled([mockFilm, mockFilm], '', undefined)
    );
    expect(result).toEqual(state);
  });
});
