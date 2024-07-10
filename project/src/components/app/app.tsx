import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/routes';
import { AddReview } from '../../pages/add-review';
import { Main, TMainProps } from '../../pages/main';
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

type TAppProps = TMainProps;

function App({ title, genre, releaseDate }: TAppProps): JSX.Element {
  const allFilmsList = useAppSelector((state) => state.allFilmsList);
  const areFilmsLoading = useAppSelector((state) => state.areFilmsLoading);

  if (areFilmsLoading) {
    return <Loader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main title={title} genre={genre} releaseDate={releaseDate} />
          }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList films={allFilmsList} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage film={allFilmsList[0]} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={allFilmsList[0]} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={allFilmsList[0]} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
