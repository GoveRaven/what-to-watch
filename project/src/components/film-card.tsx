import { Link } from 'react-router-dom';
import { AppRoutes } from '../consts/routes';
import { useState } from 'react';
import { makePathWithParams } from '../utils/makePath';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
};

export function FilmCard({ name, previewImage, id }: FilmCardProps) {
  const [, setActiveCardID] = useState<number | null>();
  const to = makePathWithParams(AppRoutes.Film, { id });
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={() => setActiveCardID(id)}
      onPointerLeave={() => setActiveCardID(null)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={to}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
