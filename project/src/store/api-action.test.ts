import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { TState } from '../types/store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { APIRoute } from '../consts/routes';
import {
  authLogin,
  authLogout,
  checkAuth,
  fetchChosenFilm,
  fetchFavoriteFilms,
  fetchFilmComment,
  fetchFilmList,
  fetchPromoFilm,
  fetchSimilarFilms,
  postComment,
  toogleFavoriteFilms,
} from './api-action';
import { makePathWithParams } from '../utils/makePath';
import { redirectToRoute } from './actions';
import * as tokenStorage from '../services/token';
import {
  createMockComments,
  createMockFilm,
  createMockUser,
} from '../utils/mock-creators';

function getActionsInArray(actions: Action<string>[]) {
  return actions.map(({ type }) => type);
}

describe('Api action', () => {
  const api = createApi();
  const mockApi = new MockAdapter(api);
  const middleware = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    TState,
    Action,
    ThunkDispatch<TState, typeof api, Action>
  >(middleware);
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore();
  });

  describe('fetchPromoFilm', () => {
    it('should dispatch "fetchPromoFilm.pending" and "fetchPromoFilm.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = createMockFilm();
      mockApi.onGet(APIRoute.Promo).reply(200, serversResponse);

      await store.dispatch(fetchPromoFilm());

      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchPromoFilm.pending.type,
        fetchPromoFilm.fulfilled.type,
      ]);

      const fetchPromoFilmFulfilled = store.getActions().at(1) as ReturnType<
        typeof fetchPromoFilm.fulfilled
      >;

      expect(fetchPromoFilmFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchPromoFilm.pending" and "fetchPromoFilm.rejected" when server response 400', async () => {
      mockApi.onGet(APIRoute.Promo).reply(400);

      await store.dispatch(fetchPromoFilm());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchPromoFilm.pending.type,
        fetchPromoFilm.rejected.type,
      ]);
    });
  });

  describe('fetchFilmList', () => {
    it('should dispatch "fetchFilmList.pending" and "fetchFilmList.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = [createMockFilm(), createMockFilm()];
      mockApi.onGet(APIRoute.Films).reply(200, serversResponse);

      await store.dispatch(fetchFilmList());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFilmList.pending.type,
        fetchFilmList.fulfilled.type,
      ]);

      const fetchFilmListFulfilled = store.getActions().at(1) as ReturnType<
        typeof fetchFilmList.fulfilled
      >;
      expect(fetchFilmListFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchFilmList.pending" and "fetchFilmList.rejected" when server response 400', async () => {
      mockApi.onGet(APIRoute.Films).reply(400);

      await store.dispatch(fetchFilmList());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFilmList.pending.type,
        fetchFilmList.rejected.type,
      ]);
    });
  });

  describe('fetchChosenFilm', () => {
    it('should dispatch "fetchChosenFilm.pending" and "fetchChosenFilm.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = createMockFilm();
      const apiRoute = makePathWithParams(APIRoute.Film, { id: 1 });

      mockApi.onGet(apiRoute).reply(200, serversResponse);

      await store.dispatch(fetchChosenFilm(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchChosenFilm.pending.type,
        fetchChosenFilm.fulfilled.type,
      ]);

      const fetchChosenFilmFulfilled = store.getActions().at(1) as ReturnType<
        typeof fetchChosenFilm.fulfilled
      >;
      expect(fetchChosenFilmFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchChosenFilm.pending" and "fetchChosenFilm.rejected" when server response 400', async () => {
      const apiRoute = makePathWithParams(APIRoute.Film, { id: 1 });
      mockApi.onGet(apiRoute).reply(400);

      await store.dispatch(fetchChosenFilm(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchChosenFilm.pending.type,
        fetchChosenFilm.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilms', () => {
    it('should dispatch "fetchSimilarFilms.pending" and "fetchSimilarFilms.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = [createMockFilm(), createMockFilm()];
      const apiRoute = makePathWithParams(APIRoute.SimilarFilms, { id: 1 });

      mockApi.onGet(apiRoute).reply(200, serversResponse);

      await store.dispatch(fetchSimilarFilms(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.fulfilled.type,
      ]);

      const fetchSimilarFilmsFulfilled = store.getActions().at(1) as ReturnType<
        typeof fetchSimilarFilms.fulfilled
      >;
      expect(fetchSimilarFilmsFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchSimilarFilms.pending" and "fetchSimilarFilms.rejected" when server response 400', async () => {
      const apiRoute = makePathWithParams(APIRoute.SimilarFilms, { id: 1 });
      mockApi.onGet(apiRoute).reply(400);

      await store.dispatch(fetchSimilarFilms(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.rejected.type,
      ]);
    });
  });

  describe('fetchFilmComment', () => {
    it('should dispatch "fetchFilmComment.pending" and "fetchFilmComment.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = createMockComments();
      const apiRoute = makePathWithParams(APIRoute.Comments, { id: 1 });

      mockApi.onGet(apiRoute).reply(200, serversResponse);

      await store.dispatch(fetchFilmComment(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFilmComment.pending.type,
        fetchFilmComment.fulfilled.type,
      ]);

      const fetchFilmCommentFulfilled = store.getActions().at(1) as ReturnType<
        typeof fetchFilmComment.fulfilled
      >;
      expect(fetchFilmCommentFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchFilmComment.pending" and "fetchFilmComment.rejected" when server response 400', async () => {
      const apiRoute = makePathWithParams(APIRoute.Comments, { id: 1 });
      mockApi.onGet(apiRoute).reply(400);

      await store.dispatch(fetchFilmComment(1));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFilmComment.pending.type,
        fetchFilmComment.rejected.type,
      ]);
    });
  });

  describe('postComment', () => {
    const mockRequest = { comment: '', rating: 5, id: 1 };
    it('should dispatch "postComment.pending" and "postComment.fulfilled" when server response 200', async () => {
      const apiRoute = makePathWithParams(APIRoute.Comments, { id: 1 });

      mockApi.onPost(apiRoute).reply(200);

      await store.dispatch(postComment(mockRequest));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        postComment.pending.type,
        redirectToRoute.type,
        postComment.fulfilled.type,
      ]);
    });

    it('should dispatch "postComment.pending" and "postComment.rejected" when server response 400', async () => {
      const apiRoute = makePathWithParams(APIRoute.Comments, { id: 1 });
      mockApi.onPost(apiRoute).reply(400);

      await store.dispatch(postComment(mockRequest));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.rejected.type,
      ]);
    });
  });

  describe('checkAuth', () => {
    it('should dispatch "checkAuth.pending" and "checkAuth.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = createMockUser();

      mockApi.onGet(APIRoute.Login).reply(200, serversResponse);

      await store.dispatch(checkAuth());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.fulfilled.type,
      ]);

      const checkAuthFulfilled = store.getActions().at(1) as ReturnType<
        typeof checkAuth.fulfilled
      >;
      expect(checkAuthFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "checkAuth.pending" and "checkAuth.rejected" when server response 400', async () => {
      mockApi.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuth());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.rejected.type,
      ]);
    });
  });

  describe('authLogin', () => {
    const mockUserRequest = {
      email: 'test@mail.com',
      password: '123456',
    };
    const mockResponse = createMockUser();

    it('should dispatch "authLogin.pending" and "authLogin.fulfilled" when server response 200 and return correct response', async () => {
      mockApi.onPost(APIRoute.Login).reply(200, mockResponse);

      await store.dispatch(authLogin(mockUserRequest));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        authLogin.pending.type,
        redirectToRoute.type,
        authLogin.fulfilled.type,
      ]);
    });

    it('should call "saveToken" one time', async () => {
      const mockSaveToken = jest.spyOn(tokenStorage, 'saveToken');
      mockApi.onPost(APIRoute.Login).reply(200, mockResponse);

      await store.dispatch(authLogin(mockUserRequest));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(mockResponse.token);
    });

    it('should dispatch "authLogin.pending" and "authLogin.rejected" when server response 400', async () => {
      mockApi.onPost(APIRoute.Login).reply(400);

      await store.dispatch(authLogin(mockUserRequest));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        authLogin.pending.type,
        authLogin.rejected.type,
      ]);
    });
  });

  describe('authLogout', () => {
    it('should dispatch "authLogout.pending" and "authLogout.fulfilled" when server response 200', async () => {
      mockApi.onDelete(APIRoute.Logout).reply(200);

      await store.dispatch(authLogout());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        authLogout.pending.type,
        authLogout.fulfilled.type,
      ]);
    });

    it('should call "dropToken" one time', async () => {
      const mockDropToken = jest.spyOn(tokenStorage, 'dropToken');
      mockApi.onDelete(APIRoute.Logout).reply(200);

      await store.dispatch(authLogout());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchFavoriteFilms', () => {
    it('should dispatch "fetchFavoriteFilms.pending" and "fetchFavoriteFilms.fulfilled" when server response 200 and return correct response', async () => {
      const serversResponse = [createMockFilm(), createMockFilm()];

      mockApi.onGet(APIRoute.FavoriteFilms).reply(200, serversResponse);

      await store.dispatch(fetchFavoriteFilms());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteFilms.pending.type,
        fetchFavoriteFilms.fulfilled.type,
      ]);

      const fetchFavoriteFilmsFulfilled = store
        .getActions()
        .at(1) as ReturnType<typeof fetchFavoriteFilms.fulfilled>;
      expect(fetchFavoriteFilmsFulfilled.payload).toEqual(serversResponse);
    });

    it('should dispatch "fetchFavoriteFilms.pending" and "fetchFavoriteFilms.rejected" when server response 400', async () => {
      mockApi.onGet(APIRoute.FavoriteFilms).reply(400);

      await store.dispatch(fetchFavoriteFilms());
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteFilms.pending.type,
        fetchFavoriteFilms.rejected.type,
      ]);
    });
  });

  describe('toogleFavoriteFilms', () => {
    const mockData = { status: 1, id: 1 };

    it('should dispatch "toogleFavoriteFilms.pending" and "toogleFavoriteFilms.fulfilled" when server response 200', async () => {
      const apiRoute = makePathWithParams(
        APIRoute.ToogleFavoriteFilm,
        mockData
      );
      mockApi.onPost(apiRoute).reply(200);

      await store.dispatch(toogleFavoriteFilms(mockData));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        toogleFavoriteFilms.pending.type,
        fetchFavoriteFilms.pending.type,
        toogleFavoriteFilms.fulfilled.type,
      ]);
    });

    it('should dispatch "toogleFavoriteFilms.pending" and "toogleFavoriteFilms.rejected" when server response 400', async () => {
      const apiRoute = makePathWithParams(
        APIRoute.ToogleFavoriteFilm,
        mockData
      );
      mockApi.onPost(apiRoute).reply(401);

      await store.dispatch(toogleFavoriteFilms(mockData));
      const actions = getActionsInArray(store.getActions());

      expect(actions).toEqual([
        toogleFavoriteFilms.pending.type,
        toogleFavoriteFilms.rejected.type,
      ]);
    });
  });
});
