import { useEffect, useState } from 'react';
import { DEFAULT_GENRE } from '../consts/films';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAllFilms } from '../store/slices/data-slice/selector';
import { actualizeFilmsList } from '../store/slices/films-slice/films-slice';

type TGenresList = {
  onGenreChange: VoidFunction;
};

export function GenresList({ onGenreChange }: TGenresList) {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const genresSet = new Set([DEFAULT_GENRE]);
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector(selectAllFilms);

  useEffect(() => {
    dispatch(actualizeFilmsList({ allFilms, genre: activeGenre }));
  }, [activeGenre, allFilms, dispatch]);

  allFilms.forEach((film) => genresSet.add(film.genre));
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
              setActiveGenre(genre);
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
