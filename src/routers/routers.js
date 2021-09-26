import { PATH_NAME } from 'configs';
import { lazy } from 'react';
const MainLayout = lazy(() => import('layouts/MainLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Cate = lazy(() => import('pages/Cate/Cate'));
const routes = [
  {
    path: `${PATH_NAME.CATEGORY}/:slug`,
    exact: true,
    guard: null,
    layout: MainLayout,
    component: Cate,
    requireRoles: null,
  },
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
