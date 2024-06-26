import { DEFAULT_GENRE } from '../consts/store';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenre, actualizeFilmsList } from '../store/actions';
import { TFilm } from '../types/films';

type TGenresList = {
  films: TFilm[];
};

export function GenresList({ films }: TGenresList) {
  const genresSet = new Set([DEFAULT_GENRE]);
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  films.map((film) => genresSet.add(film.genre));
  const genresArr = Array.from(genresSet);
  return (
    <ul className="catalog__genres-list">
      {genresArr.map((genre) => (
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
            }}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}
