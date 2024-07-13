import { ChangeEvent, useState } from 'react';
import { RatingInput } from './rating-input';

export function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  function ratingHandler(event: ChangeEvent<HTMLInputElement>) {
    setRating(event.target.value);
  }

  const needDisabledButton = text.length < 50 || text.length > 400;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <RatingInput rating={rating} ratingHandler={ratingHandler} />
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={needDisabledButton}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
