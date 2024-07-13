import { useAppSelector } from '../../hooks';
import { NotFound } from '../../pages/not-found';
import { Loader } from '../loader';
import { ReviewColumn } from './reviews-column';

export function Reviews() {
  const chosenFilmsComments = useAppSelector((state) => state.filmComments);
  const isFilmCommentLoading = useAppSelector(
    (state) => state.isFilmCommentLoading
  );

  if (isFilmCommentLoading && !chosenFilmsComments) {
    return <Loader />;
  } else if (!isFilmCommentLoading && !chosenFilmsComments) {
    return <NotFound />;
  }

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
