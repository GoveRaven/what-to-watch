import { AuthorizationStatus } from '../consts/authhorization-status';
import { store } from '../store';
import { TFilm } from './films';
import { TReview } from './reviews';
import { TUser } from './user';

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TUserSlice = {
  authStatus: AuthorizationStatus;
  isAuthStatusChecked: boolean;
  user: null | TUser;
};

export type TFilmsSlice = {
  genre: string;
  filmsByCurrentGenre: TFilm[];
};

export type TDataSlice = {
  promoFilm: TFilm | null;
  isPromoLoading: boolean;
  allFilms: TFilm[];
  areFilmsLoading: boolean;
  chosenFilm: TFilm | null;
  isFilmLoading: boolean;
  similarFilms: TFilm[];
  filmComments: TReview[];
  areFilmCommentsLoading: boolean;
  favoriteFilms: TFilm[];
};
