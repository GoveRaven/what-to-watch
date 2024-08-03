import { Link } from 'react-router-dom';
import { AppRoute } from '../consts/routes';
import { memo } from 'react';

type TLogo = {
  isLightVersion?: boolean;
};

function LogoComponent({ isLightVersion }: TLogo): JSX.Element {
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

export const Logo = memo(LogoComponent);
