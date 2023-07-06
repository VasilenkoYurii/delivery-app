import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMenu } from 'redux/restSlise/operations';
import { refreshingUser } from 'redux/authSlise/operations';

import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { McDonalds } from './restaurans/McDonalds/McDonalds';
import { Dominos } from './restaurans/Domonos/Dominos';
import { Sushi } from './restaurans/Sushi/Sushi';
import { Sweets } from './restaurans/Sweets/Sweets';
import { ShopingHostoryPage } from './pages/ShopingHistory/ShopingHistory';
import { RegisterPage } from './pages/Register/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AccountPage } from './pages/Account/AccountPage';
import { UserPromo } from './UserPromo/UserPromo';
import { UserData } from './UserData/UserData';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMenu());
    dispatch(refreshingUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<RestaurantPage />}>
          <Route path="mcDonalds" element={<McDonalds />} />
          <Route path="dominos" element={<Dominos />} />
          <Route path="sushi" element={<Sushi />} />
          <Route path="sweets" element={<Sweets />} />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/shoppingHistory" element={<ShopingHostoryPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/account" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/account" />
          }
        />
        <Route
          path="/account"
          element={<PrivateRoute component={AccountPage} redirectTo="/login" />}
        >
          <Route
            path="userData"
            element={<PrivateRoute component={UserData} redirectTo="/login" />}
          />
          <Route
            path="userPromo"
            element={<PrivateRoute component={UserPromo} redirectTo="/login" />}
          />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
