import { Container, createTheme } from '@mui/material';
import { Box, styled, ThemeProvider } from '@mui/system';
import { PROVIDER_DRAWER_WIDTH } from 'constant';
import React, { useEffect, useState } from 'react';

import ProviderAppBar from './components/ProviderAppBar';
import ProviderDrawer from './components/ProviderDrawer';
//locales
import 'locales/i18nProvider';
import { useTranslation } from 'react-i18next';
const darkTheme = {
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#424242',
  },
  text: {
    primary: '#fff',
    secondary: '#fff',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
};
const lightTheme = {
  mode: 'light',
};
const providerTheme = (mode) => {
  const paletteTheme = mode ? lightTheme : darkTheme;
  return createTheme({
    palette: {
      ...paletteTheme,
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
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '100% !important',
            paddingTop: 16,
            backgroundColor: mode ? 'initial' : '#121212',
            minHeight: `calc(100vh - ${64}px)`,
          },
        },
      },
    },
  });
};
const StyledMain = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  marginLeft: 0,
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: 0,
  }),
  ...(open && {
    marginLeft: PROVIDER_DRAWER_WIDTH,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}));
const ProviderLayout = ({ children }) => {
  const { i18n, t: translate } = useTranslation();
  const [open, setOpen] = useState(true);
  // true:light, false:dark
  const [mode, setMode] = useState(true);
  // const [language, setLanguage] = useState('en');
  useEffect(() => {
    if (mode) document.body.style.color = 'initial';
    else document.body.style.color = '#fff';
  }, [mode]);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <ThemeProvider theme={providerTheme(mode)}>
      <Box>
        <ProviderAppBar
          toggleMode={() => setMode(!mode)}
          toggleDrawer={() => setOpen(!open)}
          changeLanguage={handleChangeLanguage}
          mode={mode}
          open={open}
          translate={translate}
          currentLanguage={i18n.language}
        />
        <ProviderDrawer open={open} translate={translate} />
      </Box>
      <StyledMain open={open}>
        <Container>{children}</Container>
      </StyledMain>
    </ThemeProvider>
  );
};

export default ProviderLayout;
