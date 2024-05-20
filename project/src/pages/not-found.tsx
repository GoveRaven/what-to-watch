import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 not found</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </>
  );
}
