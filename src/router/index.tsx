import { Navigate, useRoutes } from 'react-router-dom';
import { NotFound } from '../view/not-found';
import { Suspense, lazy } from 'react';

// import dynamic
const HomeView = lazy(() => import('../view/home'));
const DetailsView = lazy(() => import('../view/details'));

const routes = () => {
  return [
    {
      path: '/',
      children: [
        { path: '/404', element: <NotFound /> },
        { path: '/', element: <HomeView /> },
        { path: '/details/:id', element: <DetailsView /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
};

const App = () => {
  const routing = useRoutes(routes());

  return <Suspense fallback={<div />}>{routing}</Suspense>;
};

export default App;
