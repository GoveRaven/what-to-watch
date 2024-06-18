import { FilmCard } from './film-card';
import { TFilm } from '../types/films';
// import { useState } from 'react';

type FilmListProps = {
  films: TFilm[];
  isMoviePage: boolean;
  genre?: string;
};

export function FilmList({
  films,
  isMoviePage,
  genre,
}: FilmListProps): JSX.Element {
  // const [activeCardID, setActiveCardID] = useState();

  if (isMoviePage) {
    films = films
      .filter((film) => film.genre === genre && films.length)
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
