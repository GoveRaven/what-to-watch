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

type AppProps = MainProps

function App({ title, genre, releaseDate, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={
            <Main title={title} genre={genre} releaseDate={releaseDate} films={films}/>
          }
        />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<MoviePage />} />
        <Route path={AppRoutes.AddReview} element={<AddReview film={films[0]}/>} />
        <Route path={AppRoutes.Player} element={<Player film={films[0]}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
