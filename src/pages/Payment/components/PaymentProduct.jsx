import { StyledGridFieldItem } from 'pages/Cart/components/CartProduct';
import { StyledGridFieldContainer } from 'pages/Cart/components/CartProduct';
import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import productSample from 'assets/images/food-sample.png';

import { Box } from '@mui/system';
const PaymentProduct = () => {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const date = '0' + tomorrow.getDate().toString();
  const month = '0' + (tomorrow.getMonth() + 1).toString();
  return (
    <StyledGridFieldContainer container sx={{ p: '0 20px' }}>
      {/* Product */}
      <Grid item lg={6} pr={6} pl={'6px'}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
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
        <Typography variant="body1">Số lượng: 2</Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} pr={2}>
        <Typography variant="body1" color="error" fontWeight="600">
          {'136.000'}đ
        </Typography>
      </StyledGridFieldItem>
      <StyledGridFieldItem item lg={2} sx={{ justifyContent: 'center' }}>
        <Typography variant="body1" color="#8BC34A" fontWeight="600">
          Giao vào ngày mai {`${date.slice(-2)}/${month.slice(-2)}`}
        </Typography>
      </StyledGridFieldItem>
    </StyledGridFieldContainer>
  );
};

export default PaymentProduct;
