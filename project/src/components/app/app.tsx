import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../consts/routes';
import { AuthorizationStatus } from '../../consts/authhorization-status';
import { AddReview } from '../../pages/add-review';
import { Main, MainProps } from '../../pages/main';
import { MoviePage } from '../../pages/movie';
import { MyList } from '../../pages/my-list';
import { NotFound } from '../../pages/not-found';
import { Player } from '../../pages/player';
import { SignIn } from '../../pages/sign-in';
import { PrivateRoute } from '../private-route';

type AppProps = MainProps;

function App({ title, genre, releaseDate }: AppProps): JSX.Element {
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<MoviePage />} />
        <Route path={AppRoutes.AddReview} element={<AddReview />} />
        <Route path={AppRoutes.Player} element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
