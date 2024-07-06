import { FilmCard } from './film-card';
import { TFilm } from '../types/films';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRoute } from '../consts/routes';

type TFilmListProps = {
  films: TFilm[];
  genre?: string;
  name?: string;
};

export function FilmList({ films, genre, name }: TFilmListProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;
  const match = matchPath(AppRoute.Film, pathname);

  if (match) {
    films = films
      .filter((film) => film.genre === genre && film.name !== name)
      .slice(0, 4);
  }

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          name={film.name}
          previewImage={film.previewImage}
          id={film.id}
          key={film.id}
          video={film.previewVideoLink}
        />
      ))}
    </div>
  );
}
