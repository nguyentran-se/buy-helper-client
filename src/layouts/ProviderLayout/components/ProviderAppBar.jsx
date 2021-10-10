import { DarkMode, LightMode, Menu, Public } from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { LANGUAGE } from 'configs';
import { PROVIDER_DRAWER_WIDTH } from 'constant';
import { useMenu } from 'hooks';
import React from 'react';

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

const ProviderAppBar = ({
  toggleMode,
  toggleDrawer,
  mode,
  open,
  changeLanguage,
  translate,
  currentLanguage,
}) => {
  const { handleClickToShowMenu, StyledMenu } = useMenu();
  return (
    <StyledAppBar position="sticky" open={open} elevation={2}>
      <Toolbar>
        <Tooltip title="Dashboard" arrow disableInteractive>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Menu fontSize="large" />
          </IconButton>
        </Tooltip>
        <Typography variant="h6" component="h2">
          Provider Dashboard
        </Typography>
        <Tooltip title={translate('TOOLTIP.LANGUAGE')} arrow disableInteractive>
          <Button
            startIcon={<Public fontSize="large" />}
            color="inherit"
            onClick={handleClickToShowMenu}
            sx={{ ml: 'auto' }}
            size="large"
          >
            {currentLanguage === LANGUAGE.ENGLISH ? 'English' : 'Tiếng Việt'}
          </Button>
        </Tooltip>

        <StyledMenu>
          <MenuItem onClick={() => changeLanguage(LANGUAGE.ENGLISH)}>
            English
          </MenuItem>
          <MenuItem onClick={() => changeLanguage(LANGUAGE.VIETNAMESE)}>
            Tiếng Việt
          </MenuItem>
        </StyledMenu>
        <Tooltip title={translate('TOOLTIP.THEME')} arrow disableInteractive>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode ? (
              <LightMode fontSize="large" />
            ) : (
              <DarkMode fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ProviderAppBar;
