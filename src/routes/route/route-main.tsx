import { Outlet } from 'react-router-dom';
import { ROUTES } from '../route-path';
import MainLayout from '../../layouts/main/main-layout';
import Home from '../../pages/home/home';

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
      element: <Home />,
    },
    {
      path: ROUTES.MAIN.HOME,
      element: <Home />,
    },
  ],
};
