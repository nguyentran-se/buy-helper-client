import { AppBar, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Logo from './components/Logo';
import Search from './components/Search';
import ToolbarSettings from './components/ToolbarSettings';
const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: 10,
}));
const Header = () => {
  return (
    <>
      <AppBar elevation={0} position="absolute">
        <Container>
          <Toolbar sx={{ padding: { xs: 0, sm: 0, md: 0 } }}>
            <Logo />
            <Search />
            <ToolbarSettings />
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
