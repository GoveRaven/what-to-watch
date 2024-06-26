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
import { TFilm } from '../../types/films';

type TAppProps = TMainProps & {
  films: TFilm[]
};

function App({ title, genre, releaseDate, films }: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={
            <Main
              title={title}
              genre={genre}
              releaseDate={releaseDate}
            />
          }
        />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<MoviePage film={films[0]} />} />
        <Route
          path={AppRoutes.AddReview}
          element={<AddReview film={films[0]} />}
        />
        <Route path={AppRoutes.Player} element={<Player film={films[0]} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
