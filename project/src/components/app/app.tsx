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
import { getIsAuthStatusChecked } from '../../store/slices/user-slice/selector';
import {
  getAllFilms,
  getAreFilmsLoading,
  getIsPromoLoading,
} from '../../store/slices/data-slice/selector';

function App(): JSX.Element {
  const allFilms = useAppSelector(getAllFilms);
  const areFilmsLoading = useAppSelector(getAreFilmsLoading);
  const isPromoLoading = useAppSelector(getIsPromoLoading);
  const isAuthStatusChecked = useAppSelector(getIsAuthStatusChecked);

  if (areFilmsLoading && isPromoLoading && !isAuthStatusChecked) {
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
              <AddReview />
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
