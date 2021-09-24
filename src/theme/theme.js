import { createTheme } from '@mui/material';
import typography from './typography';
//Color Palette: #388E3C #8BC34A #DCE775 #FFF59D
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8BC34A',
      light: '#DCE775',
      dark: '#388E3C',
      contrastText: '#fff',
    },
  },
  typography: { ...typography },
});

export default theme;
