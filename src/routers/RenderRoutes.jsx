import React, { Fragment, Suspense } from 'react';
import routes from './routers';
import { Route, Switch } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import ScrollTopOnNavigate from 'HOCs/ScrollTopOnNavigate';
const RenderRoutes = () => {
  return (
    //route not need MainLayout
    <Suspense fallback={<div></div>}>
      <Switch>
        {routes.map(
          (route) =>
            route.layout !== 'MainLayout' && (
              <Route {...route} key={route.path} />
            ),
        )}
        <MainLayout>
          <Suspense fallback={<div></div>}>
            <Switch>
              {routes.map((route) => {
                if (route.layout !== 'MainLayout') return;
                const Guard = route.guard || Fragment;
                /* const Layout = route.layout || Fragment; */
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
                        <ScrollTopOnNavigate>
                          <Component {...props} />
                        </ScrollTopOnNavigate>
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
      </Switch>
    </Suspense>
  );
};

export default RenderRoutes;
