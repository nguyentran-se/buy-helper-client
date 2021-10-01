import { ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import RenderRoutes from 'routers/RenderRoutes';
import theme from './theme/theme';
import { SnackbarProvider } from 'notistack';
import { Fade } from '@mui/material';
const App = () => {
  useEffect(() => {
    console.log('%cWELCOME TO BUY HELPER!', 'color: #8BC34A; font-size: 32px');
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={1800}
        disableWindowBlurListener
        TransitionComponent={Fade}
      >
        <RenderRoutes />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
