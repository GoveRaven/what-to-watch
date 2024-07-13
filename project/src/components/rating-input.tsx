import { ChangeEvent, Fragment } from 'react';

type TRatingInput = {
  rating: string;
  ratingHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function RatingInput({ rating, ratingHandler }: TRatingInput) {
  const rates = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return (
    <div className="rating__stars">
      {rates.map((rate) => (
        <Fragment key={rate}>
          <input
            className="rating__input"
            id={`star-${rate}`}
            type="radio"
            name="rating"
            value={rate}
            onChange={ratingHandler}
            checked={Number(rating) === rate}
          />
          <label className="rating__label" htmlFor={`star-${rate}`}>
            Rating {rate}
          </label>
        </Fragment>
      ))}
    </div>
  );
}
