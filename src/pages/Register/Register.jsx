import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const { handleSubmit, control } = useForm();
  const handleRegisterForm = (data) => {
    // console.log(data);
  };
  return (
    <Box maxWidth={500} sx={{ margin: '72px auto 0', pl: 2, pr: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#8BC34A' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký BuyHelper
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(handleRegisterForm)}
        sx={{ textAlign: 'center' }}
      >
        <Stack spacing={2}>
          <Controller
            control={control}
            name="account"
            render={({ field: { onChange } }) => (
              <TextField
                type="text"
                label="Họ và tên"
                required
                placeholder="Nhập họ và tên"
                fullWidth
                autoFocus
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="account"
            render={({ field: { onChange } }) => (
              <TextField
                type="text"
                label="Tài khoản"
                required
                placeholder="Nhập tài khoản"
                fullWidth
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <TextField
                type={'password'}
                label="Mật khẩu"
                required
                placeholder="Nhập mật khẩu"
                fullWidth
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="rePassword"
            render={({ field: { onChange } }) => (
              <TextField
                type={'password'}
                label="Nhập lại mật khẩu"
                required
                placeholder="Nhập lại mật khẩu"
                fullWidth
                onChange={onChange}
              />
            )}
          />
          <TextField
            type="text"
            label="Vai trò"
            defaultValue="Người mua hàng"
            name="role"
            helperText="Tạm thời bạn chỉ được đăng ký là người mua hàng"
            InputProps={{ readOnly: true }}
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Đăng Ký
        </Button>
        <Typography variant="body1" mt={1}>
          Bạn đã có tài khoản?{' '}
          <Typography
            component={Link}
            to="/login"
            style={{ color: '#8BC34A', fontWeight: '600' }}
          >
            Đăng nhập
          </Typography>
        </Typography>
        <Typography
          component={Link}
          to="/forgot-password"
          style={{ color: '#8BC34A', fontWeight: '600' }}
        >
          Quên mật khẩu?
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
