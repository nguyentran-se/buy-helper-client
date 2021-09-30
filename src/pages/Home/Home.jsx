import { Grid } from '@mui/material';
import React from 'react';
import CategoryList from './components/CategoryList';
import ProductCard from './components/ProductCard';

const Home = () => {
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
                <ProductCard />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
