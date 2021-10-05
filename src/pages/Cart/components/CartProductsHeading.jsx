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
      <Grid item xs={4} sm={5} md={5} lg={5} pr={6} pl={2}>
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
      <StyledGridFieldItem item xs={2} sm={2} md={2} lg={2} pr={2}>
        <Typography variant="body1">Đơn giá</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item xs={3} sm={2} md={2} lg={2} pr={2}>
        <Typography variant="body1">Số lượng</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item xs={2} sm={2} md={2} lg={2} pr={2}>
        <Typography variant="body1">Thành tiền</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        sx={{ justifyContent: 'center' }}
      >
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
