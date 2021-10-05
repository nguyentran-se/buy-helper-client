import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
// import { useParams } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductCard from './components/ProductCard';

const Cate = () => {
  // const { slug } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowSnack = () => {
    enqueueSnackbar('Thêm vào giỏ hàng thành công!', { variant: 'success' });
  };
  return (
    <div className="buyhelper-home">
      <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          sx={{ position: 'sticky', top: 50 }}
        >
          <CategoryList />
        </Grid>
        <Grid container item xs={10} sm={10} md={10} lg={10} spacing={1}>
          {Array(32)
            .fill()
            .map((_, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <ProductCard handleClickShowSnack={handleClickShowSnack} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cate;
