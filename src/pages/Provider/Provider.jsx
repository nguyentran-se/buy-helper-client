import { createTheme } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import React, { useState } from 'react';

import ProviderAppBar from './components/ProviderAppBar';
import ProviderDrawer from './components/ProviderDrawer';

const providerTheme = createTheme({
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

const Provider = () => {
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={providerTheme}>
      <Box>
        <ProviderAppBar toggleDrawer={() => setOpen(!open)} open={open} />
        <ProviderDrawer open={open} />
      </Box>
    </ThemeProvider>
  );
};

export default Provider;
