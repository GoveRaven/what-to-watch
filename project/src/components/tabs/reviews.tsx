import { TReview } from '../../types/reviews';

type TReviewsProps = {
  reviews: TReview[];
};

function getDate(date: string) {
  const fullDate = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${
    months[fullDate.getMonth()]
  } ${fullDate.getDate()} ,${fullDate.getFullYear()}`;
}

export function Reviews({ reviews }: TReviewsProps) {
  const halfOfReviews = Math.ceil(reviews.length / 2);
  const reviews1 = reviews.slice(0, halfOfReviews);
  const reviews2 = reviews.slice(halfOfReviews);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews1.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>
                  {getDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews2.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>
                  {getDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
