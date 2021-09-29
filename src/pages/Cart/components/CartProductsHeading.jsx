import { DeleteSweepOutlined } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { StyledGridFieldContainer, StyledGridFieldItem } from './CartProduct';

const CartProductsHeading = () => {
  return (
    <StyledGridFieldContainer container>
      <Grid item lg={5} pr={6} pl={2}>
        <FormControlLabel
          label={`Tất cả (${2} sản phẩm)`}
          control={
            <Checkbox
            // checked
            //onChange
            />
          }
        />
      </Grid>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1">Đơn giá</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1">Số lượng</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1">Thành tiền</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={1} sx={{ justifyContent: 'center' }}>
        <IconButton>
          <DeleteSweepOutlined
          //onclick
          />
        </IconButton>
      </StyledGridFieldItem>
    </StyledGridFieldContainer>
  );
};

export default CartProductsHeading;
