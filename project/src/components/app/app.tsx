import {Route, BrowserRouter, Routes} from 'react-router-dom';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {Hotels} from '../../types/hotels';

// todo Разбить на компоненты propertyScreen

type AppProps = {
  hotels: Hotels;
}

function App(props: AppProps): JSX.Element {
  const {hotels} = props;
  const hotel = hotels[0];

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<WelcomeScreen hotels={hotels} />}/>
        <Route path={AppRoutes.Room} element={<PropertyScreen hotel={hotel} />}/>
        <Route path={AppRoutes.SignIn} element={<LoginScreen/>}/>
        <Route path={AppRoutes.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesScreen/></PrivateRoute>}/>
        <Route path="*" element={<ErrorScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
