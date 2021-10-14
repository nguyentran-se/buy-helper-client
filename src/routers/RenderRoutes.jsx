import { USER_ROLE } from 'configs';
import ScrollTopOnNavigate from 'hocs/ScrollTopOnNavigate';
import MainLayout from 'layouts/MainLayout/MainLayout';
import ProviderLayout from 'layouts/ProviderLayout/ProviderLayout';
import React, { Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routers';
const RenderRoutes = () => {
  return (
    //route not need MainLayout
    <Suspense fallback={<div></div>}>
      <Switch>
        {routes.map(
          (route) =>
            route.layout !== 'MainLayout' &&
            route.layout !== 'ProviderLayout' &&
            route.layout !== 'TownLeaderLayout' && (
              <Route {...route} key={route.path} />
            ),
        )}
        <Route path="/town-leader">
          <ProviderLayout type={USER_ROLE.TOWN_LEADER}>
            <Suspense fallback={<div></div>}>
              <Switch>
                {routes
                  .filter((route) => route.layout === 'TownLeaderLayout')
                  .map((route) => {
                    const { path, exact } = route;
                    const Guard = route.guard || Fragment;
                    const Component = route.component;
                    return (
                      <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                          <Guard>
                            <ScrollTopOnNavigate>
                              <Component {...props} />
                            </ScrollTopOnNavigate>
                          </Guard>
                        )}
                      />
                    );
                  })}
              </Switch>
            </Suspense>
          </ProviderLayout>
        </Route>
        {/* Provider */}
        <Route path="/provider">
          <ProviderLayout>
            <Suspense fallback={<div></div>}>
              <Switch>
                {routes
                  .filter((route) => route.layout === 'ProviderLayout')
                  .map((route) => {
                    const { path, exact } = route;
                    const Guard = route.guard || Fragment;
                    const Component = route.component;
                    return (
                      <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                          <Guard>
                            <ScrollTopOnNavigate>
                              <Component {...props} />
                            </ScrollTopOnNavigate>
                          </Guard>
                        )}
                      />
                    );
                  })}
              </Switch>
            </Suspense>
          </ProviderLayout>
        </Route>
        {/* MainLayout */}
        <MainLayout>
          <Suspense fallback={<div></div>}>
            <Switch>
              {routes
                .filter((route) => route.layout === 'MainLayout')
                .map((route) => {
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
