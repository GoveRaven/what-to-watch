import { datatype, random, internet, name } from 'faker';
import { TFilm } from '../types/films';

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
