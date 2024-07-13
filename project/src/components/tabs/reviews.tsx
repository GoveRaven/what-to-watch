import { useAppSelector } from '../../hooks';
import { ReviewColumn } from './reviews-column';

export function Reviews() {
  const chosenFilmsComments = useAppSelector((state) => state.filmComments);

  const halfOfReviews = Math.ceil(chosenFilmsComments.length / 2);
  const firstReviewsHalf = chosenFilmsComments.slice(0, halfOfReviews);
  const secondReviewsHalf = chosenFilmsComments.slice(halfOfReviews);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews={firstReviewsHalf} />
      <ReviewColumn reviews={secondReviewsHalf} />
    </div>
  );
}
