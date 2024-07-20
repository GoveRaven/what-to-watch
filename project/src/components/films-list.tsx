import { FilmCard } from './film-card';
import { TFilm } from '../types/films';

type TFilmListProps = {
  films: TFilm[];
};

export function FilmList({ films }: TFilmListProps): JSX.Element {
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
