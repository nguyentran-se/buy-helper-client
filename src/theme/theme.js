import { createTheme } from '@mui/material';
import typography from './typography';
//Color Palette: #388E3C #8BC34A #DCE775 #FFF59D
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8BC34A',
      light: '#DCE775',
      dark: '#388E3C',
      contrastText: '#fff',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 100,
    },
  },
  typography: { ...typography },
});
theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: 1280,
          },
        },
      },
    },
  },
});

export default theme;
