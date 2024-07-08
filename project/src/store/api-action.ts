import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/store';
import { AxiosInstance } from 'axios';
import { TFilm } from '../types/films';
import { APIRoute, AppRoute } from '../consts/routes';
import {
  redirectToRoute,
  setAuthStatus,
  setFilms,
  setFilmsLoadingStatus,
} from './actions';
import { TUser } from '../types/user';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { dropToken, saveToken } from '../services/token';

export const fetchFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsLoadingStatus(true));
  const { data } = await api.get<TFilm[]>(APIRoute.Films);
  dispatch(setFilms(data));
  dispatch(setFilmsLoadingStatus(false));
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get<TUser>(APIRoute.Login);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
});

export const authLogin = createAsyncThunk<
  void,
  { email: string; password: string },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/authLogin', async (data, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<TUser>(APIRoute.Login, data);
  saveToken(token);
  dispatch(setAuthStatus(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const authLogout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/authLogout', async (_arg, { dispatch, extra: api }) => {
  await api.delete<TUser>(APIRoute.logout);
  dropToken();
  dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
});
