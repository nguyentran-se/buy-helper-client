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
import CartCheckoutUser from 'shared/CartCheckoutUser/CartCheckoutUser';
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
          <CartCheckoutUser />
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
