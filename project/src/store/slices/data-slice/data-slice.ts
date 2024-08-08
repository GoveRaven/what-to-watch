import { createSlice } from '@reduxjs/toolkit';
import { TDataSlice } from '../../../types/store';
import { ActionName } from '../../../consts/store-action';
import {
  fetchChosenFilm,
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
  isFilmCommentLoading: false,
};

export const dataSlice = createSlice({
  name: ActionName.Data,
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
        state.isFilmCommentLoading = true;
      })
      .addCase(fetchFilmComment.fulfilled, (state, action) => {
        state.isFilmCommentLoading = false;
        state.filmComments = action.payload;
      });
  },
});
