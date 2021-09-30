import { InfoOutlined } from '@mui/icons-material';
import { Alert } from '@mui/material';
import React from 'react';

const PrimaryAlert = () => {
  return (
    <Alert
      variant="outlined"
      severity="info"
      sx={{
        borderColor: (theme) => theme.palette.primary.main,
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
      dự kiến. BuyHelper đang nỗ lực giao các đơn hàng trong thời gian sớm nhất.
      Cám ơn sự thông cảm của quý khách!
    </Alert>
  );
};

export default PrimaryAlert;
