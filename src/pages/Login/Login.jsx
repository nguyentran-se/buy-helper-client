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
import { useDispatch } from 'react-redux';
import { loginFail, loginSuccess } from 'slices/authSlice';
// import { setLocalStorage } from 'helpers';
import { PATH_NAME } from 'configs';
const roles = [
  {
    value: 'buyer',
    label: 'NGƯỜI MUA HÀNG',
  },
  {
    value: 'townleader',
    label: 'TỔ TRƯỞNG',
  },
  {
    value: 'provider',
    label: 'NHÀ CUNG CẤP',
  },
];
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
    //fake login here
    if (
      formData.account === 'buyer' &&
      formData.password === 'buyer' &&
      formData.role === 'buyer'
    ) {
      const userData = { role: formData.role, acc: formData.account };
      setTimeout(() => {
        dispatch(loginSuccess(userData));
        // setLocalStorage('BhUser', userData);
        // if (formData.role === 'buyer')
        history.replace(PATH_NAME.CATEGORY + '/category1');
        // else if (formData.role === 'supplier')
        //   history.replace(PATH_NAME.SUPPLIER);
        // else if (formData.role === 'town_leader')
        //   history.replace(PATH_NAME.TOWN_LEADER);
      }, 1000);
    } else if (
      formData.account === 'provider' &&
      formData.password === 'provider' &&
      formData.role === 'provider'
    ) {
      const userData = { role: formData.role, acc: formData.account };
      setTimeout(() => {
        dispatch(loginSuccess(userData));
        // setLocalStorage('BhUser', userData);
        // if (formData.role === 'buyer')
        history.replace(PATH_NAME.PROVIDER);
        // else if (formData.role === 'supplier')
        //   history.replace(PATH_NAME.SUPPLIER);
        // else if (formData.role === 'town_leader')
        //   history.replace(PATH_NAME.TOWN_LEADER);
      }, 1000);
    } else if (
      formData.account === 'townleader' &&
      formData.password === 'townleader' &&
      formData.role === 'townleader'
    ) {
      const userData = { role: formData.role, acc: formData.account };
      setTimeout(() => {
        dispatch(loginSuccess(userData));
        // setLocalStorage('BhUser', userData);
        // if (formData.role === 'buyer')
        history.replace(PATH_NAME.TOWN_LEADER);
        // else if (formData.role === 'supplier')
        //   history.replace(PATH_NAME.SUPPLIER);
        // else if (formData.role === 'town_leader')
        //   history.replace(PATH_NAME.TOWN_LEADER);
      }, 1000);
    } else {
      dispatch(loginFail('Wrong password!'));
    }
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
            to={PATH_NAME.REGISTER}
            style={{ color: '#8BC34A', fontWeight: '600' }}
          >
            Đăng ký
          </Typography>
        </Typography>
        <Typography
          component={Link}
          to={PATH_NAME.FORGOT_PASSWORD}
          style={{ color: '#8BC34A', fontWeight: '600' }}
        >
          Quên mật khẩu?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
