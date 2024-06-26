import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, actualizeFilmsList } from './actions';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(actualizeFilmsList, (state, action) => {
      if (state.genre === 'All genres') {
        state.films = initialState.films;
      } else {
        state.films = initialState.films.filter(
          (film) => film.genre === state.genre
        );
      }
    });
});
