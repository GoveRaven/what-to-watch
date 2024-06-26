import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, actualizeFilmsList } from './actions';
import { films } from '../mocks/films';
import { DEFAULT_GENRE } from '../consts/films';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
  defaultFilmsList: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(actualizeFilmsList, (state) => {
      if (state.genre === DEFAULT_GENRE) {
        state.films = initialState.films;
      } else {
        state.films = initialState.films.filter(
          (film) => film.genre === state.genre
        );
      }
    });
});
