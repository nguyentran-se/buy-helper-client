import React, { useEffect } from 'react';

const ScrollTopOnNavigate = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <>{children}</>;
};

export default ScrollTopOnNavigate;
