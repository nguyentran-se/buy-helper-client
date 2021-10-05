import { PATH_NAME } from 'configs';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn } from 'selectors/commonSelectors';

const AuthGuard = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) return <Redirect to={PATH_NAME.LOGIN} />;
  return <>{children}</>;
};

export default AuthGuard;
