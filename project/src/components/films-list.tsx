import { FilmCard } from './film-card';
import { TFilm } from '../types/films';
// import { useState } from 'react';

type FilmListProps = {
  films: TFilm[];
  isMoviePage: boolean;
};

export function FilmList({
  films,
  isMoviePage,
}: FilmListProps): JSX.Element {
  // const [activeCardID, setActiveCardID] = useState();

  if (isMoviePage) {
    films.length = 4;
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
