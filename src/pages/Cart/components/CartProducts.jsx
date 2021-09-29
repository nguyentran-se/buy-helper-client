import { Grid } from '@mui/material';
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
