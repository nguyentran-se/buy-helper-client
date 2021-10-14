import { PolicyOutlined } from '@mui/icons-material';
import {
  Avatar,
  Typography,
  TextField,
  Stack,
  Button,
  Modal,
  Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import { PATH_NAME } from 'configs';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const { handleSubmit, control } = useForm();
  const handleForgotForm = (data) => {
    console.log(data);
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
          <PolicyOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          TÌm lại mật khẩu của bạn
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(handleForgotForm)}
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h6" textAlign="left" gutterBottom>
          Vui lòng nhập email hoặc số điện thoại để tìm kiếm tài khoản của bạn.
        </Typography>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange } }) => (
            <TextField
              type="text"
              label="Email hoặc số điện thoại"
              placeholder="Nhập email hoặc số điện thoại"
              autoFocus
              required
              fullWidth
              onChange={onChange}
            />
          )}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 3, justifyContent: 'center' }}
        >
          <Link to={PATH_NAME.LOGIN}>
            <Button variant="outlined" color="error">
              Hủy bỏ
            </Button>
          </Link>
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Tìm kiếm
          </Button>
        </Stack>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Alert
            severity="info"
            sx={{ m: '30px auto 0', width: 'calc(100% - 100px)' }}
          >
            This feature has not been supported yet!
          </Alert>
        </Modal>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
