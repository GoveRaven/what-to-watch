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
  return (
    <>
      {/* // TODO
    Сделать ревью в двух колонках */}
      {reviews.map((review) => (
        <div className="film-card__reviews film-card__row" key={review.id}>
          <div className="film-card__reviews-col">
            <div className="review">
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
          </div>
        </div>
      ))}
    </>
  );
}
