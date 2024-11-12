import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <div>Home</div>,
      children: [
        {
          path: 'login',
          element: <div>asdasd</div>,
        },
      ],
    },
  ]);
}
