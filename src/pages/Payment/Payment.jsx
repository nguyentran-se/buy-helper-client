import { Button, Grid, Paper } from '@mui/material';
import CartCheckout from 'shared/CartCheckout/CartCheckout';
import CartIntro from 'shared/CartIntro/CartIntro';
import React from 'react';
// import { useHistory } from 'react-router';
import PaymentProduct from './components/PaymentProduct';
import PaymentMethods from './components/PaymentMethods';
const Payment = () => {
  // const history = useHistory();
  return (
    <>
      <CartIntro title="1. Đơn hàng" />
      <Grid container spacing={2}>
        {/* LEFT */}
        <Grid item lg={9}>
          {/* Field: Don gia, ... */}
          {/* Products */}
          <PaymentProduct />
          <PaymentProduct />
          <PaymentProduct />
          <PaymentProduct />

          {/* Payment methods */}
          <PaymentMethods />
        </Grid>
        {/* end LEFT */}

        {/* RIGHT */}
        <Grid item lg={3} sx={{ pt: 1 }}>
          <CartCheckout hasAction={false} finalPriceTitle={'Thành tiền'}>
            <Paper sx={{ padding: '8px 16px' }}>
              <span
                style={{
                  marginBottom: '0px',
                  background:
                    'url(	https://salt.tikicdn.com/ts/upload/7f/18/fb/bc46d16541c861eea8243f5819fc0766.png) left center no-repeat',
                  padding: '0px 0px 0px 45px',
                  display: 'block',
                }}
              >
                Đơn hàng bạn sẽ được miễn phí vận chuyển.
              </span>
            </Paper>
          </CartCheckout>
        </Grid>
        {/* end RIGHT */}
      </Grid>
      {/* end container */}
      <Button
        variant="contained"
        sx={{
          textTransform: 'capitalize',
          height: 50,
          fontSize: 20,
          width: 350,
        }}
        onClick={() => {
          // history.push('/');
        }}
      >
        ĐẶT MUA
      </Button>
    </>
  );
};

export default Payment;
