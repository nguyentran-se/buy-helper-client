import { InfoOutlined } from '@mui/icons-material';
import { Alert, Typography } from '@mui/material';
import React from 'react';

const CartIntro = () => {
  return (
    <>
      <Alert
        variant="outlined"
        severity="info"
        sx={{
          borderColor: (theme) => theme.palette.primary.main,
          mt: '10px',
          alignItems: 'center',
          backgroundColor: 'rgb(232, 246, 222)',
          color: (theme) => theme.palette.primary.main,
          fontWeight: '600',
        }}
        icon={
          <InfoOutlined
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
          />
        }
      >
        Do ảnh hưởng của dịch Covid-19, một số khu vực có thể nhận hàng chậm hơn
        dự kiến. BuyHelper đang nỗ lực giao các đơn hàng trong thời gian sớm
        nhất. Cám ơn sự thông cảm của quý khách!
      </Alert>
      <Typography
        variant="h6"
        component="h2"
        margin="24px 0 4px 0"
        fontWeight="700"
      >
        GIỎ HÀNG
      </Typography>
    </>
  );
};

export default CartIntro;
