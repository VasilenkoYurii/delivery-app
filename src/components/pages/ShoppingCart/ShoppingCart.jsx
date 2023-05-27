import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ShoppingCartContainer, OutletBox } from './ShoppingCart.styled';
import { OrderForm } from 'components/OrderForm/OrderForm';

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <OrderForm />
      <Suspense fallback={<Loader />}>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
