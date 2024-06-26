import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<string>('films/changeGenre');
const actualizeFilmsList = createAction('films/actualizeFilmsList');

export { changeGenre, actualizeFilmsList };
