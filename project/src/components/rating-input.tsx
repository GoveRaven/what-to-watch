import { Fragment } from 'react';

type TRatingInputProps = {
  rating: string;
  onInputChange: (event: { target: { value: string } }) => void;
};

const rates = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export function RatingInput({ rating, onInputChange }: TRatingInputProps) {
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
            onChange={onInputChange}
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
