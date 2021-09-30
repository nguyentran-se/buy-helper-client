import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
const propTypes = {
  hasAction: PropTypes.bool,
  finalPriceTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
const CartCheckout = ({
  hasAction = true,
  finalPriceTitle = 'Tổng cộng',
  children,
}) => {
  const history = useHistory();
  return (
    <Stack spacing={2} sx={{ position: 'sticky', top: '16px' }}>
      <Card>
        <CardHeader
          action={<Button variant="text">Thay đổi</Button>}
          title={
            <Typography
              variant="subtitle1"
              component="h3"
              fontWeight="700"
              color="textPrimary"
            >
              Giao tới
            </Typography>
          }
          sx={{ pb: 0 }}
        />
        <CardContent sx={{ pt: 1, '&:last-child': { pb: 2 } }}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Typography
                variant="subtitle1"
                component="h3"
                fontWeight="700"
                color="textPrimary"
              >
                Nguyễn Văn User
              </Typography>
              <Typography
                variant="subtitle1"
                component="h3"
                fontWeight="700"
                color="textPrimary"
              >
                0905 123 456
              </Typography>
            </Stack>
            <Typography variant="body2" color="textPrimary">
              (315) 732-0514 55 Sanger Ave New Hartford, New York(NY), 13413
            </Typography>
            <Typography variant="body2" color="textPrimary">
              (Địa chỉ giao hàng thuộc vùng giãn cách, thời gian giao hàng có
              thể chậm hơn dự kiến)
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span>Tạm tính</span> <span>{'68.000đ'}</span>
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span>Giảm giá</span> <span>{'0đ'}</span>
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1" color="textPrimary">
              {finalPriceTitle}
            </Typography>{' '}
            <Box>
              <Typography
                variant="body1"
                color="error"
                fontWeight="600"
                fontSize={22}
                lineHeight={1.1}
                textAlign="right"
              >
                {'68.000đ'}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                (Đã bao gồm VAT nếu có)
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {hasAction && (
        <Button
          variant="contained"
          sx={{
            textTransform: 'capitalize',
            height: 40,
            fontSize: 16,
          }}
          onClick={() => history.push('/checkout/payment')}
        >
          Mua hàng (1)
        </Button>
      )}
      {children}
    </Stack>
  );
};
CartCheckout.propTypes = propTypes;

export default CartCheckout;
