import { paymentMethods } from 'constant';
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
const PaymentMethods = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        width="100%"
        fontWeight="700"
        margin="24px 0 10px 0"
      >
        {'2. Chọn hình thức thanh toán'}
        <Typography
          variant="body2"
          color="#8BC34A"
          fontStyle="italic"
          display="inline-block"
          fontWeight="600"
          ml={1}
        >
          (Khuyến khích thanh toán trả trước và hạn chế tiếp xúc gần để đề phòng
          dịch COVID-19)
        </Typography>
      </Typography>
      <Box
        sx={{
          backgroundColor: '#fff',
          p: '20px',
          borderRadius: '4px',
          mb: 3,
        }}
      >
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="payment"
            defaultValue="cod"
            name="radio-buttons-group"
          >
            {paymentMethods.map((p) => (
              <FormControlLabel
                value={p.value}
                control={<Radio />}
                key={p.value}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={p.img}
                      style={{ width: 32, height: 32, marginRight: '12px' }}
                    />
                    <Typography variant="body1">{p.des}</Typography>
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default PaymentMethods;
