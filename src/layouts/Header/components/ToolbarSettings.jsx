import { AccountCircle } from '@mui/icons-material';
import { IconButton, List, ListItem, MenuItem, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import { useMenu } from 'hooks';
import React from 'react';
import { EventNoteOutlined, Logout } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  marginLeft: 'auto',
  '& .MuiListItem-root': {
    padding: theme.spacing(1, 0),
  },
  '& .MuiListItem-root + .MuiListItem-root': {
    marginLeft: theme.spacing(2),
  },
}));
const ToolbarSettings = () => {
  const { handleClickToShowMenu, StyledMenu } = useMenu();
  return (
    <StyledList>
      {/* <ListItem component={Link} to="#cart"> */}
      {/* <Tooltip title="Giỏ hàng" arrow disableInteractive>
          <IconButton size="small" color="inherit">
            <Badge
              badgeContent={17}
              color="error"
              sx={{ minWidth: 23, minHeight: 23 }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Tooltip> */}
      {/* </ListItem> */}
      <ListItem sx={{ paddingRight: 0, paddingLeft: 0 }}>
        <Tooltip title="Tài khoản" arrow disableInteractive>
          <IconButton
            size="small"
            color="inherit"
            onClick={handleClickToShowMenu}
          >
            <AccountCircle sx={{ width: 28, height: 28 }} />
          </IconButton>
        </Tooltip>
        <StyledMenu>
          <MenuItem component={Link} to="/orders">
            <ListItemIcon>
              <EventNoteOutlined fontSize="medium" />
            </ListItemIcon>
            Đơn hàng của tôi
          </MenuItem>
          <MenuItem component={Link} to="/buyer">
            <Avatar /> Tài khoản của tôi
          </MenuItem>
          <Divider />
          {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
          {/* <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
          <MenuItem component={Link} to="/">
            <ListItemIcon>
              <Logout fontSize="medium" />
            </ListItemIcon>
            Đăng xuất
          </MenuItem>
        </StyledMenu>
      </ListItem>
    </StyledList>
  );
};

export default ToolbarSettings;
