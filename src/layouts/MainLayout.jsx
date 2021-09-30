import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#F4F4F4',
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: 90,
      }}
    >
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
