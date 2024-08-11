import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/store';
import { AxiosInstance } from 'axios';
import { TFilm } from '../types/films';
import { APIRoute, AppRoute } from '../consts/routes';
import { redirectToRoute } from './actions';
import { TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { makePathWithParams } from '../utils/makePath';
import { TReview } from '../types/reviews';

type TThunkApiConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

export const fetchPromoFilm = createAsyncThunk<
  TFilm,
  undefined,
  TThunkApiConfig
>('data/fetchPromoFilm', async (_arg, { extra: api }) => {
  const { data } = await api.get<TFilm>(APIRoute.Promo);
  return data;
});

export const fetchFilmList = createAsyncThunk<
  TFilm[],
  undefined,
  TThunkApiConfig
>('data/fetchFilmsList', async (_arg, { extra: api }) => {
  const { data } = await api.get<TFilm[]>(APIRoute.Films);
  return data;
});

export const fetchChosenFilm = createAsyncThunk<TFilm, number, TThunkApiConfig>(
  'data/fetchChosenFilm',
  async (id, { extra: api }) => {
    const apiRoute = makePathWithParams(APIRoute.Film, { id });
    const { data } = await api.get<TFilm>(apiRoute);
    return data;
  }
);

export const fetchSimilarFilms = createAsyncThunk<
  TFilm[],
  number,
  TThunkApiConfig
>('data/fetchSimilarFilms', async (id, { extra: api }) => {
  const apiRoute = makePathWithParams(APIRoute.SimilarFilms, { id });
  const { data } = await api.get<TFilm[]>(apiRoute);
  return data;
});

export const fetchFilmComment = createAsyncThunk<
  TReview[],
  number,
  TThunkApiConfig
>('data/fetchFilmComment', async (id, { extra: api }) => {
  const apiRoute = makePathWithParams(APIRoute.Comments, { id });
  const { data } = await api.get<TReview[]>(apiRoute);
  return data;
});

export const postComment = createAsyncThunk<
  void,
  { comment: string; rating: number; id: number },
  TThunkApiConfig
>('data/postComment', async (commentInfo, { dispatch, extra: api }) => {
  const { id, ...requestInfo } = commentInfo;
  const apiRoute = makePathWithParams(APIRoute.Comments, { id });
  const redirectRoute = makePathWithParams(AppRoute.Film, { id });
  await api.post<TUser>(apiRoute, requestInfo);
  dispatch(redirectToRoute(redirectRoute));
});

export const checkAuth = createAsyncThunk<TUser, undefined, TThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  }
);

export const authLogin = createAsyncThunk<
  TUser,
  { email: string; password: string },
  TThunkApiConfig
>('user/authLogin', async (UserData, { dispatch, extra: api }) => {
  const { data } = await api.post<TUser>(APIRoute.Login, UserData);
  saveToken(data.token);
  dispatch(redirectToRoute(AppRoute.Main));
  return data;
});

export const authLogout = createAsyncThunk<void, undefined, TThunkApiConfig>(
  'user/authLogout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchFavoriteFilms = createAsyncThunk<
  TFilm[],
  undefined,
  TThunkApiConfig
>('data/fetchFavoriteFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<TFilm[]>(APIRoute.FavoriteFilms);
  return data;
});

export const toogleFavoriteFilms = createAsyncThunk<
  void,
  { status: number; id: number },
  TThunkApiConfig
>('data/toogleFavoriteFilms', async (data, { extra: api }) => {
  const apiRoute = makePathWithParams(APIRoute.ToogleFavoriteFilm, data);
  await api.post(apiRoute);
});
