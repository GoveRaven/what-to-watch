import { DEFAULT_GENRE } from '../consts/films';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenre, actualizeFilmsList } from '../store/actions';
import { TFilm } from '../types/films';

type TGenresList = {
  films: TFilm[];
  onGenreChange: VoidFunction;
};

export function GenresList({ films, onGenreChange }: TGenresList) {
  const genresSet = new Set([DEFAULT_GENRE]);
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

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
              dispatch(actualizeFilmsList());
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
