import { Typography } from '@mui/material';
import React from 'react';

const Error404View = () => {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          backgroundImage:
            'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
          height: 'calc(100vh - 100px - 32px)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Typography color="red" variant="h1" component="h2" textAlign="center">
          404
        </Typography>
        <Typography variant="h4" component="p" textAlign="center">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
        </Typography>
      </div>
    </div>
  );
};

export default Error404View;
