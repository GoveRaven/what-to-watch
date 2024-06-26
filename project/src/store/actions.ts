import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<string>('genre/changeGenre');
const actualizeFilmsList = createAction('films/actualizeFilmsList');

export { changeGenre, actualizeFilmsList };
