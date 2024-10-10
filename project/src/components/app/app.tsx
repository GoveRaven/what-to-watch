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
import { selectIsAuthStatusChecked } from '../../store/slices/user-slice/selector';
import {
  selectAreFilmsLoading,
  selectIsPromoLoading,
} from '../../store/slices/data-slice/selector';
import { checkAuth } from '../../store/api-action';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const areFilmsLoading = useAppSelector(selectAreFilmsLoading);
  const isPromoLoading = useAppSelector(selectIsPromoLoading);
  const isAuthStatusChecked = useAppSelector(selectIsAuthStatusChecked);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (areFilmsLoading && isPromoLoading && !isAuthStatusChecked) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
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
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
