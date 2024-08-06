import { useAppSelector } from '../../hooks';
import { NotFound } from '../../pages/not-found';
import {
  getFilmComments,
  getIsFilmCommentLoading,
} from '../../store/slices/data-slice/selector';
import { Loader } from '../loader';
import { ReviewColumn } from './reviews-column';

export function Reviews() {
  const chosenFilmComments = useAppSelector(getFilmComments);
  const areFilmCommentsLoading = useAppSelector(getIsFilmCommentLoading);

  if (areFilmCommentsLoading) {
    return <Loader />;
  }

  if (!chosenFilmComments) {
    return <NotFound />;
  }

  const halfOfReviews = Math.ceil(chosenFilmComments.length / 2);
  const firstReviewsHalf = chosenFilmComments.slice(0, halfOfReviews);
  const secondReviewsHalf = chosenFilmComments.slice(halfOfReviews);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews={firstReviewsHalf} />
      <ReviewColumn reviews={secondReviewsHalf} />
    </div>
  );
}
