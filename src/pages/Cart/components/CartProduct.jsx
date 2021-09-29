import { AddRounded, DeleteOutlined, RemoveRounded } from '@mui/icons-material';
import {
  ButtonBase,
  Checkbox,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import productSample from 'assets/images/food-sample.png';
import React from 'react';

export const StyledGridFieldContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '4px',
  marginBottom: 8,
  userSelect: 'none',
}));

export const StyledGridFieldItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)({
  width: 34,
  height: 28,
  outline: 'none',
  '& .MuiOutlinedInput-root': {
    // borderColor: 'inherit',
    height: '100%',
    borderRadius: 'unset',
    '&.Mui-focused': {
      border: '1px solid',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  '& .MuiInputBase-input': {
    padding: 0,
    textAlign: 'center',
  },
});
const CartProduct = ({ handleIncrement, handleDecrement, counter }) => {
  return (
    <StyledGridFieldContainer container>
      {/* Product */}
      <Grid item lg={5} pr={6} pl={'6px'}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
          <Checkbox />
          {/* <RatioImage src={productSample} /> */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <img src={productSample} alt="" style={{ width: 78, height: 78 }} />
            <Typography variant="body1" className="line-clamp--2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              ducimus facere eum autem cupiditate? Et consectetur nulla
              voluptatum minima, omnis, esse error delectus placeat accusantium
              aliquam totam, natus nesciunt dolorem.
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1">{'68.000'}đ</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} pr={2}>
        {/* <ButtonGroup
          size="small"
          aria-label="small outlined button group"
          color="inherit"
        > */}
        <Stack direction="row">
          <ButtonBase
            onClick={handleDecrement}
            sx={{ border: '1px solid', width: 28, borderRadius: '2px 0 0 2px' }}
          >
            <RemoveRounded fontSize="16px" />
          </ButtonBase>
          <StyledTextField size="20px" defaultValue={1} />
          <ButtonBase
            onClick={handleIncrement}
            sx={{ border: '1px solid', width: 28, borderRadius: '0 2px 2px 0' }}
          >
            <AddRounded fontSize="16px" />
          </ButtonBase>
        </Stack>
        {/* </ButtonGroup> */}
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1" color="error" fontWeight="600">
          {'68.000'}đ
        </Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={1} sx={{ justifyContent: 'center' }}>
        <IconButton sx={{ marginLeft: '-6px' }}>
          <DeleteOutlined
          //onclick
          />
        </IconButton>
      </StyledGridFieldItem>
    </StyledGridFieldContainer>
  );
};

export default CartProduct;
