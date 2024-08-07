type TOverviewProps = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
};

function getRating(rating: number) {
  switch (true) {
    case rating === 10:
      return 'Awesome';
    case rating >= 8:
      return 'Very good';
    case rating >= 5:
      return 'Good';
    case rating >= 3:
      return 'Normal';
    default:
      return 'Bad';
  }
}

export function Overview({
  rating,
  scoresCount,
  description,
  director,
  starring,
}: TOverviewProps) {
  const rate = getRating(rating);

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
