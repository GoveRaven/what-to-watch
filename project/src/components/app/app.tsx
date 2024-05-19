import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutesConsts } from '../../consts/Routes';
import { AuthorizationStatus } from '../../consts/authhorization-status';
import { AddReview } from '../../pages/add-review';
import { Main, MainProps } from '../../pages/main';
import { MoviePage } from '../../pages/movie';
import { MyList } from '../../pages/my-list';
import { PageNotFound } from '../../pages/page-not-found';
import { Player } from '../../pages/player';
import { SignIn } from '../../pages/sign-in';
import { PrivateRoute } from '../private-route';

type AppProps = MainProps;

function App({ title, genre, releaseDate }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutesConsts.Main}
          element={
            <Main title={title} genre={genre} releaseDate={releaseDate} />
          }
        />
        <Route path={RoutesConsts.SignIn} element={<SignIn />} />
        <Route
          path={RoutesConsts.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={RoutesConsts.Film} element={<MoviePage />} />
        <Route path={RoutesConsts.AddReview} element={<AddReview />} />
        <Route path={RoutesConsts.Player} element={<Player />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
