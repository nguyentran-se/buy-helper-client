import { DeleteSweepOutlined } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import productSample from 'assets/images/food-sample.png';
import React from 'react';
import CartProduct from './CartProduct';
import CartProductsHeading from './CartProductsHeading';

const CartProducts = () => {
  return (
    <Grid container spacing={2}>
      {/* LEFT */}
      <Grid item lg={9}>
        {/* Field: Don gia, ... */}
        <CartProductsHeading />
        {/* Products */}
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </Grid>

      {/* RIGHT */}
      <Grid item lg={3}>
        Address
      </Grid>
    </Grid>
  );
};

export default CartProducts;
