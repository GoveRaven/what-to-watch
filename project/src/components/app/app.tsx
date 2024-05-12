import { Main, MainProps } from '../../pages/main';

type AppProps = MainProps

function App({ title, genre, releaseDate }: AppProps): JSX.Element {
  return <Main title={title} genre={genre} releaseDate={releaseDate} />;
}

export default App;
