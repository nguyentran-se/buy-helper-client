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
const roles = [
  {
    value: 'buyer',
    label: 'NGƯỜI MUA HÀNG',
  },
  {
    value: 'town',
    label: 'TỔ TRƯỞNG',
  },
  {
    value: 'sup',
    label: 'NHÀ CUNG CẤP',
  },
];
const Login = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.replace('/category/category1');
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
        onSubmit={handleOnSubmit}
        sx={{ textAlign: 'center' }}
      >
        <Stack spacing={2}>
          <TextField
            type="text"
            name="account"
            label="Tài khoản"
            required
            placeholder="Nhập tài khoản"
            fullWidth
            autoFocus
          />
          <TextField
            type="password"
            name="password"
            label="Mật khẩu"
            required
            placeholder="Nhập mật khẩu"
            fullWidth
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
          <TextField
            select
            label="Vai trò"
            defaultValue="buyer"
            name="role"
            // value={}
            // onChange={}
            helperText="Vui lòng chọn vai trò của bạn"
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
