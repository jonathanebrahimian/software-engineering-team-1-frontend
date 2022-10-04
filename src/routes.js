import { Navigate, useRoutes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router({ changeDark }) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage changeDark={changeDark} />,
    },
    {
      path: '/admin',
      element: <AdminPage />,
    },
    {
      path: '/404',
      element: <Page404 />,
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
