import { Link } from 'react-router-dom';
import { AppRoutes } from '../consts/routes';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
};

export function FilmCard({ name, previewImage, id }: FilmCardProps) {
  const to = `${AppRoutes.Film}${id}`;
  return (
    <article className="small-film-card catalog__films-card">
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
