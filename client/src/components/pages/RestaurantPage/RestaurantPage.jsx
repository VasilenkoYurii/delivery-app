import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { RestaurantPageContainer, OutletBox } from './RestaurantPage.styled';
import { RestaurantNavBar } from 'components/RestaurantNavBar/RestaurantNavBar';

const RestaurantPage = () => {
  return (
    <RestaurantPageContainer>
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
