import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenre, actualizeFilmsList } from '../store/actions';
import { TFilm } from '../types/films';

type TGenresList = {
  films: TFilm[];
};

export function GenresList({ films }: TGenresList) {
  const genres = ['All genres'];
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  films.map((film) => genres.includes(film.genre) || genres.push(film.genre));
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
            }}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}
