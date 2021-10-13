import { PATH_NAME } from 'configs';
import { lazy } from 'react';
import AuthGuard from 'guards/AuthGuard';
//pages
const Error404View = lazy(() => import('pages/Error404View/Error404View'));
const HomeIntro = lazy(() => import('pages/HomeIntro/HomeIntro'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Payment = lazy(() => import('pages/Payment/Payment'));
const PaymentSuccess = lazy(() =>
  import('pages/PaymentSuccess/PaymentSuccess'),
);
const Orders = lazy(() => import('pages/Orders/Orders'));
const OrderDetail = lazy(() => import('pages/OrderDetail/OrderDetail'));
const Buyer = lazy(() => import('pages/Buyer/Buyer'));
const Cate = lazy(() => import('pages/Cate/Cate'));
const ProviderAccount = lazy(() =>
  import('pages/ProviderAccount/ProviderAccount'),
);
const ProviderAddProduct = lazy(() =>
  import('pages/ProviderAddProduct/ProviderAddProduct'),
);
const ProviderProducts = lazy(() =>
  import('pages/ProviderProducts/ProviderProducts'),
);
const ProviderReport = lazy(() =>
  import('pages/ProviderReport/ProviderReport'),
);

const routes = [
  {
    path: PATH_NAME.ROOT,
    exact: true,
    layout: 'HomeIntroLayout',
    component: HomeIntro,
  },
  {
    path: PATH_NAME.PROVIDER,
    exact: true,
    guard: AuthGuard,
    layout: 'ProviderLayout',
    component: ProviderAccount,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PROVIDER_ADD_PRODUCT,
    exact: true,
    guard: AuthGuard,
    layout: 'ProviderLayout',
    component: ProviderAddProduct,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PROVIDER_PRODUCTS,
    exact: true,
    guard: AuthGuard,
    layout: 'ProviderLayout',
    component: ProviderProducts,
    requireRoles: null,
  },
  {
    path: PATH_NAME.PROVIDER_REPORT,
    exact: true,
    guard: AuthGuard,
    layout: 'ProviderLayout',
    component: ProviderReport,
    requireRoles: null,
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
    path: PATH_NAME.ORDER_DETAIL,
    exact: true,
    guard: AuthGuard,
    layout: 'MainLayout',
    component: OrderDetail,
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
