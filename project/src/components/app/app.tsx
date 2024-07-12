import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/routes';
import { AddReview } from '../../pages/add-review';
import { Main } from '../../pages/main';
import { MoviePage } from '../../pages/movie';
import { MyList } from '../../pages/my-list';
import { NotFound } from '../../pages/not-found';
import { Player } from '../../pages/player';
import { SignIn } from '../../pages/sign-in';
import { PrivateRoute } from '../private-route';
import { useAppSelector } from '../../hooks';
import { Loader } from '../loader';
import { HistoryRouter } from '../history-routes/history-routes';
import { browserHistory } from '../history-routes/browser-history';

function App(): JSX.Element {
  const allFilms = useAppSelector((state) => state.allFilms);
  const areFilmsLoading = useAppSelector((state) => state.areFilmsLoading);
  const isPromoLoading = useAppSelector((state) => state.isPromoLoading);

  if (areFilmsLoading && isPromoLoading) {
    return <Loader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList films={allFilms} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview film={allFilms[0]} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player film={allFilms[0]} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
