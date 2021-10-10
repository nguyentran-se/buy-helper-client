import { Container, createTheme } from '@mui/material';
import { Box, styled, ThemeProvider } from '@mui/system';
import { PROVIDER_DRAWER_WIDTH } from 'constant';
import React, { useState } from 'react';

import ProviderAppBar from './components/ProviderAppBar';
import ProviderDrawer from './components/ProviderDrawer';

const providerTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode ? 'light' : 'dark',
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 13,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
};
const StyledMain = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  paddingTop: 16,
  marginLeft: 0,
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: PROVIDER_DRAWER_WIDTH,
  }),
}));
const ProviderLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  // true:light, false:dark
  const [mode, setMode] = useState(true);
  return (
    <ThemeProvider theme={providerTheme(mode)}>
      <Box>
        <ProviderAppBar
          toggleMode={() => setMode(!mode)}
          toggleDrawer={() => setOpen(!open)}
          mode={mode}
          open={open}
        />
        <ProviderDrawer open={open} />
      </Box>
      <StyledMain open={open}>
        <Container>{children}</Container>
      </StyledMain>
    </ThemeProvider>
  );
};

export default ProviderLayout;
