import { SliceName } from '../../../consts/store-action';
import { TFilm } from '../../../types/films';
import { TState } from '../../../types/store';

export const selectFilmsByCurrentGenre = (state: TState): TFilm[] =>
  state[SliceName.Films].filmsByCurrentGenre;
