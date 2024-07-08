import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from '../components/history-routes/browser-history';
import { reducer } from '../store/reducer';

type TReducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, TReducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'route/redirectToRoute') {
      browserHistory.push(action.payload);
    }
    return next(action);
  };
