import { FilmCard } from './film-card';
import { TFilm } from '../types/films';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRoutes } from '../consts/routes';

type TFilmListProps = {
  films: TFilm[];
  genre?: string;
};

export function FilmList({ films, genre }: TFilmListProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;
  const match = matchPath(AppRoutes.Film, pathname);

  if (match) {
    films = films.filter((film) => film.genre === genre).slice(0, 4);
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
