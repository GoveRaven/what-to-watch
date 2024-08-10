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
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loader } from '../loader';
import { HistoryRouter } from '../history-routes/history-routes';
import { browserHistory } from '../history-routes/browser-history';
import { selectIsAuthStatusChecked } from '../../store/slices/user-slice/selector';
import {
  selectAllFilms,
  selectAreFilmsLoading,
  selectIsPromoLoading,
} from '../../store/slices/data-slice/selector';
import { checkAuth, fetchFavoriteFilms } from '../../store/api-action';
import { useEffect } from 'react';

function App(): JSX.Element {
  const allFilms = useAppSelector(selectAllFilms);
  const areFilmsLoading = useAppSelector(selectAreFilmsLoading);
  const isPromoLoading = useAppSelector(selectIsPromoLoading);
  const isAuthStatusChecked = useAppSelector(selectIsAuthStatusChecked);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

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
              <MyList />
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
