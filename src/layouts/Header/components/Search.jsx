import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Badge, Button, IconButton, InputBase, Tooltip } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { PATH_NAME } from 'configs';

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 34,
  marginRight: theme.spacing(2),

  display: 'flex',
  alignItems: 'center',

  overflow: 'hidden',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
}));

// [theme.breakpoints.up('sm')]: {
// },

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: 140,
  color: '#fff',
  height: '100%',
  textTransform: 'capitalize',
  borderRadius: theme.spacing(0, 0.5, 0.5, 0),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& .MuiButton-startIcon>*:nth-of-type(1)': { fontSize: 22 },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'textPrimary',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(0.5, 0, 0, 0.5),
  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
  },
}));

const Search = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        maxWidth: 888,
        ml: [0, 3, 11],
      }}
    >
      <StyledSearch>
        <StyledInputBase
          placeholder="Tìm sản phẩm ..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <StyledButton startIcon={<SearchIcon />}>Tìm kiếm</StyledButton>
      </StyledSearch>
      <Box component={Link} to={PATH_NAME.CART}>
        <Tooltip title="Giỏ hàng" arrow disableInteractive>
          <IconButton size="small" color="inherit">
            <Badge badgeContent={17} color="error">
              <ShoppingCartOutlined sx={{ fontSize: '28px' }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Search;
