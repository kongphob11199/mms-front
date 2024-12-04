import { Outlet } from 'react-router-dom';
import { ROUTES } from '../route-path';
import MainLayout from '../../layouts/main/main-layout';
import { lazy } from 'react';
// import Home from '../../pages/home/home';

const HomePage = lazy(() => import('../../pages/home/home'));

export const mainRoutes = {
  path: ROUTES.MAIN.ROOT,
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    {
      path: ROUTES.MAIN.ROOT,
      element: <HomePage />,
    },
    {
      path: ROUTES.MAIN.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.MAIN.SETTINGS,
      element: <div>setting</div>,
    },
  ],
};
