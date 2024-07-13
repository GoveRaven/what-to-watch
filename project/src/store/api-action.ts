import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/store';
import { AxiosInstance } from 'axios';
import { TFilm } from '../types/films';
import { APIRoute, AppRoute } from '../consts/routes';
import {
  redirectToRoute,
  setAuthStatus,
  setAuthStatusChecked,
  setFilmComments,
  setFilmLoadingStatus,
  setFilms,
  setFilmsLoadingStatus,
  setPromoFilm,
  setPromoFilmLoadingStatus,
  setSimilarFilms,
  setChosenFilm,
} from './actions';
import { TUser } from '../types/user';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { dropToken, saveToken } from '../services/token';
import { makePathWithParams } from '../utils/makePath';

type TThunkApiConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

export const fetchPromoFilm = createAsyncThunk<
  void,
  undefined,
  TThunkApiConfig
>('data/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  try {
    dispatch(setPromoFilmLoadingStatus(true));
    const { data } = await api.get<TFilm>(APIRoute.Promo);
    dispatch(setPromoFilm(data));
  } finally {
    dispatch(setPromoFilmLoadingStatus(false));
  }
});

export const fetchFilmList = createAsyncThunk<void, undefined, TThunkApiConfig>(
  'data/fetchFilmsList',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsLoadingStatus(true));
    const { data } = await api.get<TFilm[]>(APIRoute.Films);
    dispatch(setFilms(data));
    dispatch(setFilmsLoadingStatus(false));
  }
);

export const fetchChosenFilm = createAsyncThunk<void, number, TThunkApiConfig>(
  'data/fetchChosenFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setFilmLoadingStatus(true));
      const apiRoute = makePathWithParams(APIRoute.Film, { id });
      const { data } = await api.get(apiRoute);
      dispatch(setChosenFilm(data));
    } finally {
      dispatch(setFilmLoadingStatus(false));
    }
  }
);

export const fetchSimilarFilms = createAsyncThunk<
  void,
  number,
  TThunkApiConfig
>('data/fetchSimilarFilms', async (id, { dispatch, extra: api }) => {
  const apiRoute = makePathWithParams(APIRoute.SimilarFilms, { id });
  const { data } = await api.get(apiRoute);
  dispatch(setSimilarFilms(data));
});

export const fetchFilmComment = createAsyncThunk<void, number, TThunkApiConfig>(
  'data/fetchFilmComment',
  async (id, { dispatch, extra: api }) => {
    const apiRoute = makePathWithParams(APIRoute.Comments, { id });
    const { data } = await api.get(apiRoute);
    dispatch(setFilmComments(data));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, TThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(setAuthStatusChecked(true));
    }
  }
);

export const authLogin = createAsyncThunk<
  void,
  { email: string; password: string },
  TThunkApiConfig
>('user/authLogin', async (data, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<TUser>(APIRoute.Login, data);
  saveToken(token);
  dispatch(setAuthStatus(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const authLogout = createAsyncThunk<void, undefined, TThunkApiConfig>(
  'user/authLogout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
);
