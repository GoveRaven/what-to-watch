import { ChangeEvent, useState } from 'react';

export function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  function ratingHandler(event: ChangeEvent<HTMLInputElement>) {
    setRating(event.target.value);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {/* TODO: порефачить отрисовку radio-кнопок ниже */}
            <input
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              value="10"
              onChange={ratingHandler}
              checked={rating === '10'}
            />
            <label className="rating__label" htmlFor="star-10">
              Rating 10
            </label>

            <input
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              value="9"
              onChange={ratingHandler}
              checked={rating === '9'}
            />
            <label className="rating__label" htmlFor="star-9">
              Rating 9
            </label>

            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              value="8"
              onChange={ratingHandler}
              checked={rating === '8'}
            />
            <label className="rating__label" htmlFor="star-8">
              Rating 8
            </label>

            <input
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              value="7"
              onChange={ratingHandler}
              checked={rating === '7'}
            />
            <label className="rating__label" htmlFor="star-7">
              Rating 7
            </label>

            <input
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              value="6"
              onChange={ratingHandler}
              checked={rating === '6'}
            />
            <label className="rating__label" htmlFor="star-6">
              Rating 6
            </label>

            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value="5"
              onChange={ratingHandler}
              checked={rating === '5'}
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>

            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value="4"
              onChange={ratingHandler}
              checked={rating === '4'}
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>

            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value="3"
              onChange={ratingHandler}
              checked={rating === '3'}
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>

            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value="2"
              onChange={ratingHandler}
              checked={rating === '2'}
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>

            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value="1"
              onChange={ratingHandler}
              checked={rating === '1'}
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>
          </div>
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
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
