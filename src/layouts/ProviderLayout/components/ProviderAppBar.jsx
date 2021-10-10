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

const ProviderAppBar = ({ toggleMode, toggleDrawer, mode, open }) => {
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
        <Tooltip title="Language" arrow disableInteractive>
          <Button
            startIcon={<Public fontSize="large" />}
            color="inherit"
            onClick={handleClickToShowMenu}
            sx={{ ml: 'auto' }}
            size="large"
          >
            English
          </Button>
        </Tooltip>

        <StyledMenu>
          <MenuItem>English</MenuItem>
          <MenuItem>Tiếng Việt</MenuItem>
        </StyledMenu>
        <Tooltip title="Theme" arrow disableInteractive>
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
