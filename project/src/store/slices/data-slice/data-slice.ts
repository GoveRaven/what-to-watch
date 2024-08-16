import { createSlice } from '@reduxjs/toolkit';
import { TDataSlice } from '../../../types/store';
import { SliceName } from '../../../consts/store-action';
import {
  fetchChosenFilm,
  fetchFavoriteFilms,
  fetchFilmComment,
  fetchFilmList,
  fetchPromoFilm,
  fetchSimilarFilms,
} from '../../api-action';

const initialState: TDataSlice = {
  promoFilm: null,
  isPromoLoading: false,
  allFilms: [],
  areFilmsLoading: false,
  chosenFilm: null,
  isFilmLoading: false,
  similarFilms: [],
  filmComments: [],
  areFilmCommentsLoading: false,
  favoriteFilms: [],
  areFavoriteFilmsLoading: false,
};

export const dataSlice = createSlice({
  name: SliceName.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchFilmList.pending, (state) => {
        state.areFilmsLoading = true;
      })
      .addCase(fetchFilmList.fulfilled, (state, action) => {
        state.areFilmsLoading = false;
        state.allFilms = action.payload;
      })
      .addCase(fetchChosenFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchChosenFilm.fulfilled, (state, action) => {
        state.isFilmLoading = false;
        state.chosenFilm = action.payload;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFilmComment.pending, (state) => {
        state.areFilmCommentsLoading = true;
      })
      .addCase(fetchFilmComment.fulfilled, (state, action) => {
        state.areFilmCommentsLoading = false;
        state.filmComments = action.payload;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.areFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.areFavoriteFilmsLoading = false;
      });
  },
});
