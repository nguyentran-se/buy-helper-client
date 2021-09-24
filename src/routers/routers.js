import { PATH_NAME } from 'configs';
import { lazy } from 'react';
const Home = lazy(() => import('pages/Home/Home'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const MainLayout = lazy(() => import('layout/MainLayout'));
const routes = [
  {
    path: PATH_NAME.CART,
    exact: true,
    guard: null,
    layout: MainLayout,
    component: Cart,
    requireRoles: null,
  },
  {
    path: PATH_NAME.ROOT,
    exact: true,
    layout: MainLayout,
    component: Home,
  },
];

export default routes;
