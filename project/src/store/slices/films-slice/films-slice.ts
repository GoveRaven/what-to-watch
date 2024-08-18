import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../../../consts/films';
import { TFilmsSlice } from '../../../types/store';
import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';

const initialState: TFilmsSlice = {
  filmsByCurrentGenre: [],
};

type TActionPayload = {
  allFilms: TFilm[];
  genre: string;
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    actualizeFilmsList: (state, action) => {
      const { allFilms, genre }: TActionPayload = action.payload;
      if (genre === DEFAULT_GENRE) {
        state.filmsByCurrentGenre = allFilms;
      } else {
        state.filmsByCurrentGenre = allFilms.filter(
          (film) => film.genre === genre
        );
      }
    },
  },
});

export const { actualizeFilmsList } = filmsSlice.actions;
