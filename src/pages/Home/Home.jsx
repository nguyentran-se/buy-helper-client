// import { Grid } from '@mui/material';
// import { useSnackbar } from 'notistack';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
// import CategoryList from './components/CategoryList';
// import ProductCard from './components/ProductCard';

const Home = () => {
  return (
    <Box sx={{ maxWidth: 500, m: '100px auto 0', textAlign: 'center' }}>
      <Typography variant="h3" component="h1">
        Intro page here
      </Typography>
      <Button
        component={Link}
        to="login"
        variant="contained"
        sx={{ mr: 2, mt: 3 }}
      >
        Sign in
      </Button>
      <Button component={Link} to="register" variant="contained" sx={{ mt: 3 }}>
        Sign up
      </Button>
    </Box>
  );
  // const { enqueueSnackbar } = useSnackbar();
  // const handleClickShowSnack = () => {
  //   enqueueSnackbar('Thêm vào giỏ hàng thành công!', { variant: 'success' });
  // };
  // return (
  //   <div className="buyhelper-home">
  //     <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
  //       <Grid
  //         item
  //         xs={2}
  //         sm={2}
  //         md={2}
  //         lg={2}
  //         sx={{ position: 'sticky', top: 50 }}
  //       >
  //         <CategoryList />
  //       </Grid>
  //       <Grid container item xs={10} sm={10} md={10} lg={10} spacing={1}>
  //         {Array(32)
  //           .fill()
  //           .map((_, index) => (
  //             <Grid
  //               key={index}
  //               item
  //               xs={12}
  //               sm={6}
  //               md={4}
  //               lg={3}
  //               sx={{ display: 'flex', flexDirection: 'column' }}
  //             >
  //               <ProductCard handleClickShowSnack={handleClickShowSnack} />
  //             </Grid>
  //           ))}
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
};

export default Home;
