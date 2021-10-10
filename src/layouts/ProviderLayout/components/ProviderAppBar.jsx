import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { Menu } from '@mui/icons-material';
import { PROVIDER_DRAWER_WIDTH } from 'constant';
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  left: 0,
  transition: theme.transitions.create(['left', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${PROVIDER_DRAWER_WIDTH}px)`,
    left: PROVIDER_DRAWER_WIDTH,
  }),
}));
const ProviderAppBar = ({ toggleDrawer, open }) => {
  return (
    <StyledAppBar position="sticky" open={open} elevation={2}>
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <Menu fontSize="large" />
        </IconButton>
        <Typography variant="h6" component="h2">
          Provider Dashboard
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ProviderAppBar;
