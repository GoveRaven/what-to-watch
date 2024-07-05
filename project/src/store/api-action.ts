import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/store';
import { AxiosInstance } from 'axios';
import { TFilm } from '../types/films';
import { APIRoute } from '../consts/routes';
import { loadFilms, setFilmsLoadingStatus } from './actions';

export const fetchFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TFilm[]>(APIRoute.Films);
  dispatch(setFilmsLoadingStatus(true));
  dispatch(loadFilms(data));
  dispatch(setFilmsLoadingStatus(false));
});
