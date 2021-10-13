import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UserImage from 'shared/User/UserImage';
import UserProfile from 'shared/User/UserProfile';

const ProviderAccount = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <Box
          component={Paper}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <UserImage
            width={90}
            height={90}
            src={
              'https://media.istockphoto.com/photos/team-in-beverage-logistics-on-deployment-briefing-picture-id1279669385?k=20&m=1279669385&s=612x612&w=0&h=76kfJ_P5NKmivqsjSw0F7MndYm4wpfOiPZ6CydFezSk='
            }
          />
          <Typography component="h3">Provider Name</Typography>
          <Typography variant="body2">Address</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box component={Paper} sx={{ p: 2 }}>
          <UserProfile />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProviderAccount;
