import { FormEvent, useState } from 'react';
import { RatingInput } from './rating-input';
import { postComment } from '../store/api-action';
import { useAppDispatch } from '../hooks';
import { useParams } from 'react-router-dom';

export function ReviewForm(): JSX.Element {
  const [comment, setText] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useParams();

  function handleInputChange(chosenRating: string) {
    setRating(chosenRating);
  }

  function onSumbit(event: FormEvent) {
    event.preventDefault();
    dispatch(postComment({ comment, rating: Number(rating), id: Number(id) }));
  }

  const isButtonDisabled =
    comment.length < 50 || comment.length > 400 || !rating;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSumbit}>
        <div className="rating">
          <RatingInput rating={rating} onInputChange={handleInputChange} />
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(event) => setText(event.target.value)}
            value={comment}
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
