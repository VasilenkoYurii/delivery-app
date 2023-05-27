import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { RestaurantPageContainer, OutletBox } from './RestaurantPage.styled';
import { RestaurantNavBar } from 'components/RestaurantNavBar/RestaurantNavBar';

const RestaurantPage = () => {
  return (
    <RestaurantPageContainer>
      <RestaurantNavBar />
      <Suspense fallback={<Loader />}>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
    </RestaurantPageContainer>
  );
};

export default RestaurantPage;
