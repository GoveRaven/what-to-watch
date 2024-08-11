import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../../../consts/films';
import { TFilmsSlice } from '../../../types/store';
import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';

const initialState: TFilmsSlice = {
  genre: DEFAULT_GENRE,
  filmsByCurrentGenre: [],
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    actualizeFilmsList: (state, action) => {
      const allFilms: TFilm[] = action.payload;
      if (state.genre === DEFAULT_GENRE) {
        state.filmsByCurrentGenre = allFilms;
      } else {
        state.filmsByCurrentGenre = allFilms.filter(
          (film) => film.genre === state.genre
        );
      }
    },
  },
});

export const { changeGenre, actualizeFilmsList } = filmsSlice.actions;
