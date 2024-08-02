import { FormEvent, useState } from 'react';
import { RatingInput } from './rating-input';
import { postComment } from '../store/api-action';
import { useAppDispatch } from '../hooks';
import { useParams } from 'react-router-dom';

export function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const filmId = Number(id);

  function handlerInputChange(chosenRating: string) {
    setRating(chosenRating);
  }

  function handelFormSumbit(event: FormEvent) {
    event.preventDefault();
    dispatch(
      postComment({ comment: text, rating: Number(rating), id: filmId })
    );
  }

  const isButtonDisabled = text.length < 50 || text.length > 400 || !rating;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handelFormSumbit}>
        <div className="rating">
          <RatingInput rating={rating} onInputChange={handlerInputChange} />
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
              disabled={isButtonDisabled}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
