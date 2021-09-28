import React, { Fragment, Suspense } from 'react';
import routes from './routers';
import { Route, Switch } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import Cart from 'pages/Cart/Cart';
const RenderRoutes = () => {
  return (
    // <Switch> //route not need MainLayout
    //   <Route component={Cart} path="/cart" exact />
    <MainLayout>
      <Suspense fallback={<div></div>}>
        <Switch>
          {routes.map((route) => {
            if (route.layout !== 'MainLayout') return;
            const Guard = route.guard || Fragment;
            {
              /* const Layout = route.layout || Fragment; */
            }
            const Component = route.component;
            // const requireRoles = route.requireRoles || [];
            const { path, exact } = route;
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <Guard>
                    {/* <Layout> */}
                    {/* <RoleRoute> */}
                    <Component {...props} />
                    {/* </RoleRoute> */}
                    {/* </Layout> */}
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    </MainLayout>
    // </Switch>
  );
};

export default RenderRoutes;
