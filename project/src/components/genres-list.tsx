import { useEffect } from 'react';
import { DEFAULT_GENRE } from '../consts/films';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAllFilms } from '../store/slices/data-slice/selector';
import {
  actualizeFilmsList,
  changeGenre,
} from '../store/slices/films-slice/films-slice';
import { selectGenre } from '../store/slices/films-slice/selector';
import { TFilm } from '../types/films';

type TGenresList = {
  films: TFilm[];
  onGenreChange: VoidFunction;
};

export function GenresList({ films, onGenreChange }: TGenresList) {
  const genresSet = new Set([DEFAULT_GENRE]);
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(selectGenre);
  const allFilms = useAppSelector(selectAllFilms);

  useEffect(() => {
    dispatch(actualizeFilmsList(allFilms));
  }, [allFilms, dispatch]);

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
