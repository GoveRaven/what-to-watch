import { useEffect } from 'react';
import { DEFAULT_GENRE } from '../consts/films';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllFilms } from '../store/slices/data-slice/selector';
import {
  actualizeFilmsList,
  changeGenre,
} from '../store/slices/films-slice/films-slice';
import { getGenre } from '../store/slices/films-slice/selector';
import { TFilm } from '../types/films';

type TGenresList = {
  films: TFilm[];
  onGenreChange: VoidFunction;
};

export function GenresList({ films, onGenreChange }: TGenresList) {
  const genresSet = new Set([DEFAULT_GENRE]);
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);
  const allFilms = useAppSelector(getAllFilms);

  useEffect(() => {
    dispatch(actualizeFilmsList(allFilms));
  });

  films.forEach((film) => genresSet.add(film.genre));
  const genres = Array.from(genresSet);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item${
            activeGenre === genre ? ' catalog__genres-item--active' : ''
          }`}
          key={genre}
        >
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(genre));
              dispatch(actualizeFilmsList(allFilms));
              onGenreChange();
            }}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}
