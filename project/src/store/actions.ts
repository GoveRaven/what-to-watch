import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction<string>('genre/changeGenre');
const FilterFilmsByGenre = createAction('films/getFilmList');

export { changeGenre, FilterFilmsByGenre };
