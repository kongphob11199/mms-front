import { useRoutes } from 'react-router-dom';
import { authRoutes } from './route/route-auth';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <div>Home</div>,
    },
    { ...authRoutes },
  ]);
}
