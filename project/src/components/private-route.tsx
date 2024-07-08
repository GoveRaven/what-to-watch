import { AppRoute } from '../consts/routes';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

type TPrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({
  children,
}: TPrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  return authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
