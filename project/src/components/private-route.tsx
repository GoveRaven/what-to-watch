import { AppRoute } from '../consts/routes';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { Loader } from './loader';
import { getAuthStatus } from '../store/slices/user-slice/selector';

type TPrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: TPrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
