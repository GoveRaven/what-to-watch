import { Link } from 'react-router-dom';
import { AppRoutes } from '../consts/routes';
import { useState } from 'react';
import { makePathWithParams } from '../utils/makePath';
import { VideoPlayer, VideoPlayerProps } from './video-player';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
} & VideoPlayerProps;

export function FilmCard({ name, previewImage, id, video }: FilmCardProps) {
  const [activeCardID, setActiveCardID] = useState<number | null>(null);
  const to = makePathWithParams(AppRoutes.Film, { id });

  let timer: number;

  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={() => {
        timer = setTimeout(setActiveCardID, 1000, id);
      }}
      onPointerLeave={() => {
        clearTimeout(timer);
        setActiveCardID(null);
      }}
    >
      <div className="small-film-card__image">
        {activeCardID ? (
          <VideoPlayer video={video} />
        ) : (
          <img src={previewImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={to}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
