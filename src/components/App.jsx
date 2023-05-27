import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMenu } from 'redux/operations';
import { selectMenu } from 'redux/selectors';

import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { McDonalds } from './restaurans/McDonalds/McDonalds';
import { Dominos } from './restaurans/Domonos/Dominos';
import { Sushi } from './restaurans/Sushi/Sushi';
import { Sweets } from './restaurans/Sweets/Sweets';

export const App = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  useEffect(() => {
    dispatch(addMenu());
  }, [dispatch]);

  setTimeout(() => {
    console.log(menu);
  }, 1500);

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
      </Route>
    </Routes>
  );
};
