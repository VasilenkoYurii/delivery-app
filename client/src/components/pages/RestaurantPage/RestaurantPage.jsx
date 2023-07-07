import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { RestaurantPageContainer, OutletBox } from './RestaurantPage.styled';
import { RestaurantNavBar } from 'components/RestaurantNavBar/RestaurantNavBar';

const RestaurantPage = () => {
  return (
    <RestaurantPageContainer>
      <Helmet>
        <title>SHOP</title>
      </Helmet>
      <RestaurantNavBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
    </RestaurantPageContainer>
  );
};

export default RestaurantPage;
