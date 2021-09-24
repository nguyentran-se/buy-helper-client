import React, { Fragment, Suspense } from 'react';
import routes from './routers';
import { Route, Switch } from 'react-router-dom';

const RenderRoutes = () => {
  return (
    <Suspense fallback={<div>waiting...</div>}>
      <Switch>
        {routes.map((route) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
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
                  <Layout>
                    {/* <RoleRoute> */}
                    <Component {...props} />
                    {/* </RoleRoute> */}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default RenderRoutes;
