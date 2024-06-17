export type OverviewProps = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
};

export function Overview({
  rating,
  scoresCount,
  description,
  director,
  starring,
}: OverviewProps) {
  function addStarring(): string {
    let result = '';
    for (let i = 0; i < starring.length; i++) {
      i + 1 === starring.length
        ? (result += `${starring[i]} `)
        : (result += `${starring[i]}, `);
    }
    return result;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {addStarring()}</strong>
        </p>
      </div>
    </>
  );
}
