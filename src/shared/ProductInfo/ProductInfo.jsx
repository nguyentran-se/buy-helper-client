import { Stack, Typography } from '@mui/material';
import React from 'react';

const ProductInfo = ({ width = 78, height = 78, productImg }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <img src={productImg} alt="" style={{ width: width, height: height }} />
      <Typography variant="body1" className="line-clamp--2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus
        facere eum autem cupiditate? Et consectetur nulla voluptatum minima,
        omnis, esse error delectus placeat accusantium aliquam totam, natus
        nesciunt dolorem.
      </Typography>
    </Stack>
  );
};

export default ProductInfo;
