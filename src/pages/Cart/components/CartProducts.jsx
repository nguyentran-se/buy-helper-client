import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CartCheckout from '../../../shared/CartCheckout/CartCheckout';
import CartProduct from './CartProduct';
import CartProductsHeading from './CartProductsHeading';
const CartProducts = () => {
  return (
    <Grid container spacing={2}>
      {/* LEFT */}
      <Grid item xs={12} sm={12} md={9} lg={9}>
        {/* Field: Don gia, ... */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            pt: 2,
            pb: '1px',
            mt: -2,
            backgroundColor: '#f4f4f4',
            zIndex: 1,
          }}
        >
          <CartProductsHeading />
        </Box>
        {/* Products */}
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </Grid>

      {/* RIGHT */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <CartCheckout />
      </Grid>
    </Grid>
  );
};

export default CartProducts;
