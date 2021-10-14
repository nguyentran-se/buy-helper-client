import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const UserProfile = ({ user, lang }) => {
  const { t: translate } = useTranslation();

  return (
    <Box>
      <Typography variant="h6" component="h3" gutterBottom>
        {lang === 'vn' ? 'Thông Tin' : translate('PROFILE')}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {lang === 'vn'
          ? 'Thông tin không thể chỉnh sửa lúc này!'
          : translate('NOT_EDITTED')}
      </Typography>
      <Grid sx={{ mt: 1 }} container spacing={2}>
        {user.map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField {...field} InputProps={{ readOnly: true }} fullWidth />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserProfile;
