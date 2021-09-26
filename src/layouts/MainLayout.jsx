import { Container } from '@mui/material';
import React from 'react';
import Header from './Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default MainLayout;
