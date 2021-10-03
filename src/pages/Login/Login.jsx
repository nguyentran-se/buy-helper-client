import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Stack,
  TextField,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
const roles = [
  {
    value: 'buyer',
    label: 'NGƯỜI MUA HÀNG',
  },
  {
    value: 'town_leader',
    label: 'TỔ TRƯỞNG',
  },
  {
    value: 'supplier',
    label: 'NHÀ CUNG CẤP',
  },
];
const Login = () => {
  const history = useHistory();
  const { handleSubmit, control } = useForm({
    defaultValues: { role: 'buyer' },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnSubmit = (formData) => {
    // console.log(formData);
    //test login here
    if (
      formData.account === 'ad' &&
      formData.password === 'ad' &&
      formData.role === 'buyer'
    )
      setTimeout(() => history.replace('/category/category1'), 2000);
  };
  return (
    <Box maxWidth={500} sx={{ margin: '100px auto 0' }}>
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
          Đăng nhập BuyHelper
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(handleOnSubmit)}
        sx={{ textAlign: 'center' }}
      >
        <Stack spacing={2}>
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
                autoFocus
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <TextField
                type={showPassword ? 'text' : 'password'}
                label="Mật khẩu"
                required
                placeholder="Nhập mật khẩu"
                fullWidth
                onChange={onChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field: { onChange } }) => (
              <TextField
                select
                label="Vai trò"
                defaultValue="buyer"
                name="role"
                onChange={onChange}
                helperText="Vui lòng chọn vai trò của bạn"
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <FormControlLabel
            sx={{ alignSelf: 'flex-start' }}
            control={<Checkbox />}
            label="Ghi nhớ đăng nhập"
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Đăng nhập
        </Button>
        <Typography variant="body1" mt={1}>
          Bạn chưa có tài khoản?{' '}
          <Typography
            component={Link}
            to="/register"
            style={{ color: '#8BC34A', fontWeight: '600' }}
          >
            Đăng ký
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

export default Login;
