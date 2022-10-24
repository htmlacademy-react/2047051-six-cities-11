import {AppRoutes} from '../../constants';
import {Navigate} from 'react-router-dom';
import {PrivateRouteProps} from '../../types/types';

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={AppRoutes.NotFound} />;
}

export default PrivateRoute;
