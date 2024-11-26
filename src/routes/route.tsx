import { createBrowserRouter, useRoutes } from 'react-router-dom';
import { authRoutes } from './route/route-auth';
import { mainRoutes } from './route/route-main';

export default function Router() {
  return useRoutes([{ ...mainRoutes }, { ...authRoutes }]);
}
