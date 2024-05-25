import { FilmCard } from './film-card';
import { TFilm } from '../types/films';
// import { useState } from 'react';

type FilmListProps = {
  films: TFilm[];
};

export function FilmList({ films }: FilmListProps): JSX.Element {
  // const [activeCard, setActiveCard] = useState();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          name={film.name}
          previewImage={film.previewImage}
          id = {film.id}
          key={film.id}
        />
      ))}
    </div>
  );
}
