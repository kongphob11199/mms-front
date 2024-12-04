import { Outlet } from 'react-router-dom';
import AuthLayout from '../../layouts/auth/auth-layout';
import { ROUTES } from '../route-path';
import { lazy } from 'react';

const LoginPage = lazy(() => import('../../pages/auth/login/login'));
const RegisterPage = lazy(() => import('../../pages/auth/register/register'));

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
      element: <LoginPage />,
    },
    {
      path: ROUTES.AUTH.LOGIN,
      element: <LoginPage />,
    },
    {
      path: ROUTES.AUTH.REGISTER,
      element: <RegisterPage />,
    },
  ],
};
