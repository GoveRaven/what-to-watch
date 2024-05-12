import { Main } from '../../pages/main';

type MainProps = {
  title: string;
  genre: string;
  relaseDate: string;
};

function App({ title, genre, relaseDate }: MainProps): JSX.Element {
  return <Main title={title} genre={genre} relaseDate={relaseDate} />;
}

export default App;
