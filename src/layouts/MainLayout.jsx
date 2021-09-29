import { Container } from '@mui/material';
import React from 'react';
import Header from './Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#F4F4F4', minHeight: '100vh' }}>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default MainLayout;
