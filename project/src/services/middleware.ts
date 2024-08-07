import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from '../components/history-routes/browser-history';
import { reducer } from '../store/reducer';
import { redirectToRoute } from '../store/actions';

type TReducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, TReducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === redirectToRoute.type) {
      browserHistory.push(action.payload);
    }
    return next(action);
  };
