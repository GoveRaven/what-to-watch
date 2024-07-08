import { Link } from 'react-router-dom';
import { AppRoute } from '../consts/routes';

type TLogo = {
  needClass?: boolean;
};

export function Logo({ needClass }: TLogo): JSX.Element {
  return (
    <div className="logo">
      <Link
        to={AppRoute.Main}
        className={`logo__link ${needClass ? 'logo__link--light' : ''}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
