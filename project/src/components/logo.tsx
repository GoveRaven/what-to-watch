import { Link } from 'react-router-dom';
import { AppRoute } from '../consts/routes';

type TLogo = {
  isLightVersion?: boolean;
};

export function Logo({ isLightVersion }: TLogo): JSX.Element {
  return (
    <div className="logo">
      <Link
        to={AppRoute.Main}
        className={`logo__link${isLightVersion ? ' logo__link--light' : ''}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
