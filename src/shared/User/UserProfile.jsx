import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const { t: translate } = useTranslation();
  const providerProfile = [
    {
      name: 'account',
      label: translate('ACCOUNT_TYPE'),
      defaultValue: 'Provider',
    },
    {
      name: 'email',
      label: 'Email',
      defaultValue: 'provider1@gmail.com',
    },
    {
      name: 'phone',
      label: translate('PHONE'),
      defaultValue: '0123 456 789',
    },
    {
      name: 'province',
      label: translate('PROVINCE'),
      defaultValue: 'Đà Nẵng',
    },
    {
      name: 'district',
      label: translate('DISTRICT'),
      defaultValue: 'Ngũ Hành Sơn',
    },
    {
      name: 'ward',
      label: translate('WARD'),
      defaultValue: 'Hòa Hải',
    },
    {
      name: 'street',
      label: translate('STREET'),
      defaultValue: 'Nam Kỳ Khởi Nghĩa',
    },
  ];
  return (
    <Box>
      <Typography variant="h6" component="h3" gutterBottom>
        {translate('PROFILE')}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {translate('NOT_EDITTED')}
      </Typography>
      <Grid sx={{ mt: 1 }} container spacing={2}>
        {providerProfile.map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField {...field} InputProps={{ readOnly: true }} fullWidth />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserProfile;
