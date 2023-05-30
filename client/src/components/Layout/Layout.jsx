import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { OutletBox } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
