import { Outlet } from 'react-router-dom';
import AuthLayout from '../../layouts/auth/auth-layout';
import Login from '../../pages/auth/login/login';
import Register from '../../pages/auth/register/register';
import { ROUTES } from '../route-path';

export const authRoutes = {
  path: ROUTES.AUTH.ROOT,
  element: (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ),
  children: [
    {
      path: '',
      element: <Login />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
  ],
};
