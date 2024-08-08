import { ActionName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TState } from '../../../types/store';

export const selectGenre = (state: TState): string =>
  state[ActionName.Films].genre;

export const selectFilmsByCurrentGenre = (state: TState): TFilm[] =>
  state[ActionName.Films].filmsByCurrentGenre;
