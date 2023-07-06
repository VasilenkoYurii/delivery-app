import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AccountNavBar } from 'components/AccountNavBar/AccountNavBar';
import { AccountPageContainer, OutletBox } from './AccountPage.styled';

export const AccountPage = () => {
  return (
    <AccountPageContainer>
      <Helmet>
        <title>ACCOUNT</title>
      </Helmet>
      <AccountNavBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
    </AccountPageContainer>
  );
};
