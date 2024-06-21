import { AppRoutes } from '../consts/routes';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { Navigate } from 'react-router-dom';

type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export function PrivateRoute({
  authorizationStatus,
  children,
}: TPrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutes.SignIn} />
  );
}
