import {
  DarkMode,
  ExitToAppOutlined,
  LightMode,
  Menu,
  Public,
} from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { LANGUAGE, PATH_NAME, USER_ROLE } from 'configs';
import { PROVIDER_DRAWER_WIDTH } from 'constant';
import { useMenu } from 'hooks';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  left: 0,
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen - 135,
  }),

  ...(open && {
    width: `calc(100% - ${PROVIDER_DRAWER_WIDTH}px)`,
    left: PROVIDER_DRAWER_WIDTH,
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  type,
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
        <Typography
          variant="h6"
          component="h2"
          sx={{ display: ['none', 'block'] }}
        >
          {type === USER_ROLE.TOWN_LEADER ? 'Town Leader' : 'Provider'}{' '}
          Dashboard
        </Typography>
        {type !== USER_ROLE.TOWN_LEADER && (
          <>
            <Tooltip
              title={translate('TOOLTIP.LANGUAGE')}
              arrow
              disableInteractive
            >
              <Button
                startIcon={<Public fontSize="large" />}
                color="inherit"
                onClick={handleClickToShowMenu}
                sx={{ ml: 'auto' }}
                size="large"
              >
                <Typography sx={{ display: ['none', 'block'] }}>
                  {currentLanguage === LANGUAGE.ENGLISH
                    ? 'English'
                    : 'Tiếng Việt'}
                </Typography>
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
          </>
        )}
        <Tooltip title={translate('TOOLTIP.THEME')} arrow disableInteractive>
          <IconButton
            color="inherit"
            onClick={toggleMode}
            sx={{ ml: type === USER_ROLE.TOWN_LEADER ? 'auto' : 'unset' }}
          >
            {mode ? (
              <LightMode fontSize="large" />
            ) : (
              <DarkMode fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title={translate('TOOLTIP.LOGOUT')} arrow disableInteractive>
          <Box component={Link} to={PATH_NAME.ROOT}>
            <Button
              startIcon={<ExitToAppOutlined />}
              color="error"
              variant="contained"
              size="large"
              sx={{ ml: 1 }}
            >
              <Typography sx={{ display: ['none', 'block'] }}>
                {translate('TOOLTIP.LOGOUT')}
              </Typography>
            </Button>
          </Box>
        </Tooltip>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ProviderAppBar;
