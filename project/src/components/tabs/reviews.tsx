import { TReview } from '../../types/reviews';
import { ReviewColumn } from './reviews-column';

type TReviewsProps = {
  reviews: TReview[];
};

export function Reviews({ reviews }: TReviewsProps) {
  const halfOfReviews = Math.ceil(reviews.length / 2);
  const firstReviewsHalf = reviews.slice(0, halfOfReviews);
  const secondReviewsHalf = reviews.slice(halfOfReviews);
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews={firstReviewsHalf}/>
      <ReviewColumn reviews={secondReviewsHalf}/>
    </div>
  );
}
