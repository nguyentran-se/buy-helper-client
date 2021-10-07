import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProductInfo from 'shared/ProductInfo/ProductInfo';

const OrderDetailProduct = ({ productImg }) => {
  return (
    <Grid
      container
      sx={{
        pt: 2,
        pb: 2,
        pl: 2,
        '&:hover': { bgcolor: (theme) => theme.palette.primary.light },
      }}
    >
      <Grid item xs={6} sm={6} sx={{ pr: 2 }}>
        <ProductInfo width={90} height={90} productImg={productImg} />
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography variant="body1">68.000đ</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography variant="body1" paddingLeft="16px">
          1
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} sx={{ pr: 2 }}>
        <Typography variant="body1" textAlign="right">
          68.000đ
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrderDetailProduct;
