import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Badge, Button, IconButton, InputBase, Tooltip } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginRight: theme.spacing(2),

  display: 'flex',
  alignItems: 'center',

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));
// [theme.breakpoints.up('sm')]: {
// },
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 3),
  width: 'max-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '#388E3C',
  borderRadius: theme.spacing(0, 0.5, 0.5, 0),
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'textPrimary',
  width: '100%',
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(0.5, 0, 0, 0.5),

  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
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
        ml: 11,
      }}
    >
      <StyledSearch>
        <StyledInputBase
          placeholder="Tìm sản phẩm ..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </StyledSearch>
      <Box component={Link} to="#cart">
        <Tooltip title="Giỏ hàng" arrow disableInteractive>
          <IconButton size="small" color="inherit">
            <Badge badgeContent={17} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Search;
