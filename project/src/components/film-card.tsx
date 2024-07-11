import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../consts/routes';
import { useState } from 'react';
import { makePathWithParams } from '../utils/makePath';
import { VideoPlayer, TVideoPlayerProps } from './video-player';

type TFilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
} & TVideoPlayerProps;

export function FilmCard({ name, previewImage, id, video }: TFilmCardProps) {
  const [activeCardID, setActiveCardID] = useState<number | null>(null);
  const to = makePathWithParams(AppRoute.Film, { id });
  const navigate = useNavigate();

  let timerID: number;

  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={() => {
        timerID = setTimeout(setActiveCardID, 1000, id);
      }}
      onPointerLeave={() => {
        clearTimeout(timerID);
        setActiveCardID(null);
      }}
      onClick={() => navigate(to)}
    >
      <div className="small-film-card__image">
        {activeCardID ? (
          <VideoPlayer video={video} />
        ) : (
          <img src={previewImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">{name}</span>
      </h3>
    </article>
  );
}
