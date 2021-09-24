import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      drawer
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
