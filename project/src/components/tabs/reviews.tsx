import { useAppSelector } from '../../hooks';
import { NotFound } from '../../pages/not-found';
import { Loader } from '../loader';
import { ReviewColumn } from './reviews-column';

export function Reviews() {
  const chosenFilmComments = useAppSelector((state) => state.filmComments);
  const areFilmCommentsLoading = useAppSelector(
    (state) => state.isFilmCommentLoading
  );

  if (!chosenFilmComments) {
    return areFilmCommentsLoading ? <Loader /> : <NotFound />;
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
