import { TReview } from '../types/reviews';
import { TFilm } from '../types/films';
import { TUser } from '../types/user';
import { datatype, date, internet, random, name } from 'faker';

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

export function createMockFilm(): TFilm {
  return {
    id: datatype.number(),
    name: random.words(),
    posterImage: random.image(),
    previewImage: random.image(),
    backgroundImage: random.image(),
    backgroundColor: internet.color(),
    videoLink: internet.url(),
    previewVideoLink: internet.url(),
    description: random.words(),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: `${name.firstName()} ${name.lastName()}`,
    starring: [
      `${name.firstName()} ${name.lastName()}`,
      `${name.firstName()} ${name.lastName()}`,
    ],
    runTime: datatype.number(),
    genre: random.word(),
    released: datatype.number(),
    isFavorite: datatype.boolean(),
  };
}

export function createMockUser(): TUser {
  return {
    avatarUrl: internet.avatar(),
    email: internet.email(),
    id: Math.round(Math.random() * (100 - 1) + 1),
    name: internet.userName(),
    token: internet.ip(),
  };
}
