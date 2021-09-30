import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '90px',
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ maxWidth: 600, margin: '0 auto', pt: 1, pb: 0.5 }}>
        <Typography variant="body1" fontWeight="600" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id
          mollitia repudiandae laboriosam atque nesciunt quisquam dignissimos
          culpa! Adipisci nisi iusto blanditiis alias
        </Typography>
        <Typography variant="body1" fontWeight="600" textAlign="center">
          Địa chỉ văn phòng:{' '}
          <span style={{ color: '#F37022' }}>Đại học FPT Đà Nẵng</span>
        </Typography>
        <Typography variant="body1" fontWeight="600" textAlign="center">
          © 2021 - Bản quyền của{' '}
          <span style={{ color: '#8BC34A' }}>BuyHelper</span> -{' '}
          <span style={{ fontStyle: 'italic' }}>buyhelper.com</span>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
