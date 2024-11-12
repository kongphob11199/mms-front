import { Outlet, useRoutes } from 'react-router-dom';
import Login from '../pages/login/login';
import AuthLayout from '../layouts/auth/auth-layout';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <div>Home</div>,
      // children: [
      //   {
      //     path: 'login',
      //     element: <Login />,
      //   },
      // ],
    },
    {
      path: 'auth',
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
      ],
    },
  ]);
}
