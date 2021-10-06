import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import productSample from 'assets/images/food-sample.png';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CartCheckoutUser from 'shared/CartCheckoutUser/CartCheckoutUser';
import OrderDetailProduct from './components/OrderDetailProduct';
const OrderDetail = () => {
  const { slug } = useParams();
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const date = '0' + tomorrow.getDate().toString();
  const month = '0' + (tomorrow.getMonth() + 1).toString();
  return (
    <Box sx={{ pt: 1 }}>
      <Typography variant="h5" component="h2" marginBottom={3}>
        Chi tiết đơn hàng #{slug}{' '}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Trạng thái đơn hàng
      </Typography>
      <Stepper activeStep={2} alternativeLabel>
        <Step>
          <StepLabel>Chờ xác nhận</StepLabel>
        </Step>
        <Step>
          <StepLabel>Chuẩn bị</StepLabel>
        </Step>
        <Step>
          <StepLabel>Đang vận chuyển</StepLabel>
        </Step>
        <Step>
          <StepLabel>Đã giao</StepLabel>
        </Step>
      </Stepper>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} md={4} sx={{ pl: 0 }}>
          <Typography variant="h6" gutterBottom>
            Thông tin người nhận
          </Typography>
          <Paper sx={{ minHeight: 108, p: 2, pb: 1, pt: 1 }}>
            <CartCheckoutUser />
          </Paper>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            pl: [0, 0, 2],
            mt: [2, 2, 0],
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Hình thức thanh toán
          </Typography>
          <Paper sx={{ flexGrow: 1, minHeight: 108, p: 2, pb: 1, pt: 1 }}>
            <Typography>Thanh toán tiền mặt khi nhận hàng</Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            pl: 2,
            mt: [2, 2, 0],
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Thời gian
          </Typography>
          <Paper sx={{ flexGrow: 1, minHeight: 108, p: 2, pb: 1, pt: 1 }}>
            <Typography variant="body1">
              Đặt hàng: {`${new Date().toLocaleString('vn')}`}
            </Typography>
            <Typography variant="body1">
              Giao hàng dự kiến:{' '}
              {`ngày mai ${date.slice(-2)}/${month.slice(-2)}`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper sx={{ mt: 3, pt: 2 }}>
        <Grid container sx={{ mb: 2, pl: 2 }}>
          <Grid item xs={6} sm={6}>
            <Typography variant="body1">Sản phẩm</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography variant="body1">Giá</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography variant="body1">Số lượng</Typography>
          </Grid>
          <Grid item xs={2} sm={2} sx={{ pr: 2 }}>
            <Typography variant="body1" textAlign="right">
              Tạm tính
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <OrderDetailProduct productImg={productSample} />
        <Divider />
        <OrderDetailProduct productImg={productSample} />
        <Divider />
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Typography variant="h6" gutterBottom>
            Tổng cộng:{' '}
            <Typography color="error" variant="h6" component="span">
              68.000đ
            </Typography>
          </Typography>
          <Stack direction="row" justifyContent="end" spacing={2}>
            <Button
              variant="text"
              component={Link}
              to="/orders"
              sx={{
                textTransform: 'none',
                color: (theme) => `${theme.palette.primary.main} !important`,
              }}
            >
              {'<< '}
              Quay lại đơn hàng của tôi
            </Button>
            <Button variant="contained" color="warning">
              Hủy đơn hàng
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderDetail;
