import { useAppSelector } from '../../hooks';
import { TFilm } from '../../types/films';

export function Overview() {
  const film = useAppSelector((state) => state.chosenFilm);

  const { rating, scoresCount, description, director, starring } =
    film as TFilm;

  let rate;
  switch (true) {
    case rating === 10:
      rate = 'Awesome';
      break;
    case rating >= 8:
      rate = 'Very good';
      break;
    case rating >= 5:
      rate = 'Good';
      break;
    case rating >= 3:
      rate = 'Normal';
      break;
    default:
      rate = 'Bad';
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rate}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}
