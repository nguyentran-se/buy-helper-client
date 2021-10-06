import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const CartCheckoutUser = () => {
  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography
          variant="subtitle1"
          component="h3"
          fontWeight="700"
          color="textPrimary"
        >
          Nguyễn Văn User
        </Typography>
        <Typography
          variant="subtitle1"
          component="h3"
          fontWeight="700"
          color="textPrimary"
        >
          0905 123 456
        </Typography>
      </Stack>
      <Typography variant="body2" color="textPrimary">
        (315) 732-0514 55 Sanger Ave New Hartford, New York(NY), 13413
      </Typography>
      <Typography variant="body2" color="textPrimary">
        (Địa chỉ giao hàng thuộc vùng giãn cách, thời gian giao hàng có thể chậm
        hơn dự kiến)
      </Typography>
    </Stack>
  );
};

export default CartCheckoutUser;
