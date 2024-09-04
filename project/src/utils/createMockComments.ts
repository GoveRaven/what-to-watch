import { TReview } from '../types/reviews';
import { datatype, date, internet, random } from 'faker';

export function createMockComments(): TReview {
  return {
    comment: random.words(),
    date: date.past().toString(),
    id: datatype.number(),
    rating: datatype.number(),
    user: {
      id: datatype.number(),
      name: internet.userName(),
    },
  };
}
