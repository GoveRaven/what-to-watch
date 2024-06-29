import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../consts/routes';
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

type TAppProps = TMainProps;

function App({ title, genre, releaseDate }: TAppProps): JSX.Element {
  const defaultFilmsList = useAppSelector((state) => state.defaultFilmsList);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={
            <Main title={title} genre={genre} releaseDate={releaseDate} />
          }
        />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={defaultFilmsList} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film}
          element={<MoviePage film={defaultFilmsList[0]} />}
        />
        <Route
          path={AppRoutes.AddReview}
          element={<AddReview film={defaultFilmsList[0]} />}
        />
        <Route
          path={AppRoutes.Player}
          element={<Player film={defaultFilmsList[0]} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
