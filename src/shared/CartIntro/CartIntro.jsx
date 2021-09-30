import { Typography } from '@mui/material';
import React from 'react';
import PrimaryAlert from 'shared/PrimaryAlert/PrimaryAlert';

const CartIntro = ({ title }) => {
  return (
    <>
      <PrimaryAlert />
      <Typography
        variant="h6"
        component="h2"
        margin="24px 0 10px 0"
        fontWeight="700"
      >
        {title}
      </Typography>
    </>
  );
};

export default CartIntro;
