import { TReviews } from '../../types/reviews';

type TReviewsProps = {
  reviews: TReviews;
};

export function Reviews({ reviews }: TReviewsProps) {
  function getDate(date: string) {
    const fullDate: Date = new Date(Date.parse(date));
    const mounth = [
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
      mounth[fullDate.getMonth()]
    } ${fullDate.getDate()} ,${fullDate.getFullYear()}`;
  }
  return (
    <>
      {/* // TODO
    Сделать ревью в двух колонках */}
      {reviews.map((review) => {
        const { comment, date, id: reviewId, rating, user } = review;
        const { name } = user;
        return (
          <div className="film-card__reviews film-card__row" key={reviewId}>
            <div className="film-card__reviews-col">
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{name}</cite>
                    <time className="review__date" dateTime={date}>
                      {getDate(date)}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{rating}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
