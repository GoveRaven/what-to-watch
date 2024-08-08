import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from '../components/history-routes/browser-history';
import { redirectToRoute } from '../store/actions';
import { rootReducer } from '../store/slices/root-reducer';

type TReducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, TReducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === redirectToRoute.type) {
      browserHistory.push(action.payload);
    }
    return next(action);
  };
