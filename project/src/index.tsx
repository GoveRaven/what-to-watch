import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchFilmAction } from './store/api-action';

store.dispatch(fetchFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="The Grand Budapest Hotel" genre="Drama" releaseDate="2014" />
    </Provider>
  </React.StrictMode>
);
