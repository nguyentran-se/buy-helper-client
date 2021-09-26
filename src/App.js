import { ThemeProvider } from '@mui/material';
import React from 'react';
import RenderRoutes from 'routers/RenderRoutes';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RenderRoutes />
    </ThemeProvider>
  );
};

export default App;
