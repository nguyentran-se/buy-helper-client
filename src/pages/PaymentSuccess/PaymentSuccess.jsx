import { Phone } from '@mui/icons-material';
import {
  Alert,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import cartSuccess from 'assets/images/cart-success.png';
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * 1. sẽ có param order_code ở đây
 */
const PaymentSuccess = () => {
  const order_code = '86868686';
  const steps = ['Đăng nhập', 'Địa chỉ giao hàng', 'Thanh toán & đặt mua'];
  return (
    <>
      <Paper sx={{ pt: 2, pb: 2, pr: 2, pl: [2, 0] }} elevation={3}>
        <Stack direction="row" alignItems="flex-start">
          <Stepper activeStep={3} alternativeLabel sx={{ mb: 3, flexGrow: 1 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              border: '1px solid #ccc',
              p: '4px 2px',
              borderRadius: '4px',
              userSelect: 'none',
              display: ['none', 'flex'],
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #388E3C',
                backgroundColor: '#388E3C',
              }}
            >
              <Phone sx={{ color: '#fff' }} />
            </div>
            <Typography
              fontWeight="600"
              variant="body1"
              color="primary"
              textAlign="center"
              component="span"
            >
              1900 1001
              <Typography variant="body2" color="textPrimary">
                8-21h, cả T7 & CN
              </Typography>
            </Typography>
          </Stack>
        </Stack>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            <img src={cartSuccess} alt="" />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h6" gutterBottom component="h3" color="brown">
              Cảm ơn bạn đã mua hàng tại BuyHelper!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Mã số đơn hàng của bạn:
            </Typography>
            <Box
              sx={{
                bgcolor: (theme) => theme.palette.primary.dark,
                display: 'inline-block',
                p: (theme) => theme.spacing(1.5, 6),
                letterSpacing: (theme) => theme.spacing(0.25),
                color: '#fff',
                fontSize: '20px',
                fontWeight: '600',
                mb: 0.5,
              }}
            >
              {order_code}
            </Box>
            <Typography variant="body1" gutterBottom>
              Bạn có thể xem lại{' '}
              <Typography
                component={Link}
                to={`/orders/detail/${order_code}`}
                target="_blank"
                sx={{
                  color: (theme) => `${theme.palette.primary.main} !important`,
                }}
              >
                đơn hàng của tôi
              </Typography>
            </Typography>
            <Typography variant="body1" color="salmon">
              Đơn hàng được vận chuyển đến hoặc qua các khu vực đang bị ảnh
              hưởng bởi Covid-19 sẽ có thể giao chậm hơn dự kiến. Kính mong quý
              khách thông cảm.
            </Typography>
            <Box>
              <span
                style={{
                  marginBottom: '8px',
                  background:
                    'url(	https://salt.tikicdn.com/ts/upload/7f/18/fb/bc46d16541c861eea8243f5819fc0766.png) left center no-repeat',
                  padding: '8px 0px 8px 45px',
                  display: 'block',
                }}
              >
                Giao vào ngày mai
              </span>
            </Box>
            <Typography variant="body1" gutterBottom>
              Thông tin chi tiết về đơn hàng đã được gửi đến địa chỉ mail{' '}
              <span style={{ color: '#8BC34A' }}>user_email@gmail.com</span>.
              Nếu không tìm thấy vui lòng kiểm tra trong hộp thư{' '}
              <span style={{ fontWeight: 'bold' }}>Spam</span> hoặc{' '}
              <span style={{ fontWeight: 'bold' }}>Junk Folder</span>.
            </Typography>
            <Alert severity="info" variant="outlined">
              Nhằm giúp việc xử lý đơn hàng nhanh hơn nữa, BuyHelper sẽ không
              gọi điện cho bạn để xác nhận đơn hàng.
            </Alert>
          </Grid>
        </Grid>
      </Paper>
      <Alert sx={{ mt: 11 }} variant="outlined" severity="info">
        Bằng việc tiến hành Đặt Mua, khách hàng đồng ý với các Điều Kiện Giao
        Dịch Chung được ban hành bởi BuyHelper:
        <Typography variant="body2">
          Quy chế hoạt động | Chính sách giải quyết khiếu nại | Chính sách bảo
          hành | Chính sách bảo mật thanh toán | Chính sách bảo mật thông tin cá
          nhân
        </Typography>
      </Alert>
    </>
  );
};

export default PaymentSuccess;
