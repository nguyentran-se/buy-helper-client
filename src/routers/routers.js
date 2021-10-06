import { PATH_NAME } from 'configs';
import { lazy } from 'react';
import AuthGuard from 'guards/AuthGuard';
//pages
const Error404View = lazy(() => import('pages/Error404View/Error404View'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Payment = lazy(() => import('pages/Payment/Payment'));
const PaymentSuccess = lazy(() =>
  import('pages/PaymentSuccess/PaymentSuccess'),
);
const Orders = lazy(() => import('pages/Orders/Orders'));
const Buyer = lazy(() => import('pages/Buyer/Buyer'));
const Cate = lazy(() => import('pages/Cate/Cate'));

const routes = [
  {
    path: PATH_NAME.ROOT,
    exact: true,
    layout: 'HomeLayout',
    component: Home,
  },
  {
    path: PATH_NAME.LOGIN,
    exact: true,
    guard: null,
    layout: 'LoginLayout',
    component: Login,
    requireRoles: null,
  },
  {
    path: PATH_NAME.REGISTER,
    exact: true,
    guard: null,
    layout: 'RegisterLayout',
    component: Register,
    requireRoles: null,
  },
  {
    path: PATH_NAME.CART,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: Cart,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PAYMENT,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: Payment,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PAYMENT_SUCCESS,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: PaymentSuccess,
    requireRoles: null,
  },
  {
    path: PATH_NAME.ORDERS,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: Orders,
    requireRoles: null,
  },
  {
    path: PATH_NAME.BUYER,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: Buyer,
    requireRoles: null,
  },
  {
    path: `${PATH_NAME.CATEGORY}/:slug`,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: Cate,
    requireRoles: null,
  },
  {
    path: '*',
    layout: 'MainLayout',
    component: Error404View,
  },
];

export default routes;
