import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute } from '../consts/routes';
import { authLogout } from '../store/api-action';
import { memo } from 'react';
import {
  selectAuthStatus,
  selectUser,
} from '../store/slices/user-slice/selector';

function UserBlockComponent(): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  const avatarUrl = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  function onButtonClick() {
    dispatch(authLogout());
  }

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src={avatarUrl?.avatarUrl || 'img/avatar.jpg'}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <button className="user-block__link" onClick={onButtonClick}>
            Sign out
          </button>
        </li>
      </ul>
    );
  }
  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

export const UserBlock = memo(UserBlockComponent);
