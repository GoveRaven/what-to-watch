import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/routes';
import { AuthorizationStatus } from '../../consts/authhorization-status';
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

type TAppProps = TMainProps;

function App({ title, genre, releaseDate }: TAppProps): JSX.Element {
  const defaultFilmsList = useAppSelector((state) => state.defaultFilmsList);
  const areFilmsLoading = useAppSelector((state) => state.areFilmsLoading);

  if (areFilmsLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={defaultFilmsList} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage film={defaultFilmsList[0]} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={defaultFilmsList[0]} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={defaultFilmsList[0]} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
