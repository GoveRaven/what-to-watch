import { Fragment } from 'react';

type TRatingInputProps = {
  rating: string;
  onInputChange: (rating: string) => void;
};

const rates = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export function RatingInput({ rating, onInputChange }: TRatingInputProps) {
  return (
    <div className="rating__stars" data-testid='review-rating'>
      {rates.map((rate) => (
        <Fragment key={rate}>
          <input
            className="rating__input"
            id={`star-${rate}`}
            type="radio"
            name="rating"
            value={rate}
            onChange={() => onInputChange(String(rate))}
            checked={Number(rating) === rate}
            data-testid="review-rate"
          />
          <label className="rating__label" htmlFor={`star-${rate}`}>
            Rating {rate}
          </label>
        </Fragment>
      ))}
    </div>
  );
}
