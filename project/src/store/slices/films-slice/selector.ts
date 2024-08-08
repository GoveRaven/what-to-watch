import { actionName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TState } from '../../../types/store';

export const selectGenre = (state: TState): string =>
  state[actionName.Films].genre;

export const selectFilmsByCurrentGenre = (state: TState): TFilm[] =>
  state[actionName.Films].filmsByCurrentGenre;
