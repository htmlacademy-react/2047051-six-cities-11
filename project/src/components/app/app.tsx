import {AppProps} from '../../types/types';
import {AppRoutes} from '../../constants';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App({offersAmount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Main offersAmount={offersAmount} />}
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route
          path={AppRoutes.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoutes.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
