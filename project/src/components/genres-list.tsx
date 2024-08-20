import { useEffect, useState } from 'react';
import { DEFAULT_GENRE } from '../consts/films';
import { TFilm } from '../types/films';

function getActualized(allFilms: TFilm[], genre: string) {
  if (genre === DEFAULT_GENRE) {
    return allFilms;
  }
  return allFilms.filter((film) => film.genre === genre);
}

type TGenresList = {
  onGenreChange: VoidFunction;
  allFilms: TFilm[];
  setActualFilms: (films: TFilm[]) => void;
};

export function GenresList({
  onGenreChange,
  allFilms,
  setActualFilms,
}: TGenresList) {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const genresSet = new Set([DEFAULT_GENRE]);

  useEffect(() => {
    const actualFilms = getActualized(allFilms, activeGenre);
    setActualFilms(actualFilms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

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
