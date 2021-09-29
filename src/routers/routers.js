import { PATH_NAME } from 'configs';
import { lazy } from 'react';
//pages
const Error404View = lazy(() => import('pages/Error404View/Error404View'));
const Home = lazy(() => import('pages/Home/Home'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Payment = lazy(() => import('pages/Payment/Payment'));

const routes = [
  {
    path: PATH_NAME.ROOT,
    exact: true,
    layout: 'MainLayout',
    component: Home,
  },
  {
    path: PATH_NAME.CART,
    exact: true,
    guard: null,
    layout: 'MainLayout',
    component: Cart,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PAYMENT,
    exact: true,
    guard: null,
    layout: 'MainLayout',
    component: Payment,
    requireRoles: null,
  },
  {
    path: `${PATH_NAME.ROOT}:slug`,
    exact: true,
    guard: null,
    layout: 'MainLayout',
    component: Home,
    requireRoles: null,
  },
  {
    path: '*',
    layout: 'MainLayout',
    component: Error404View,
  },
];

export default routes;
