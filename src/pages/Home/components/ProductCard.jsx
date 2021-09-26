import { AddShoppingCart } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import foodSampleImg from 'assets/images/food-sample.png';
import React from 'react';
const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  padding: '8px',
  fontSize: 1.5,
  '&:hover': {
    boxShadow:
      '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(1, 0, 0, 0),
    cursor: 'default',
    '&:last-child': { paddingBottom: 0 },
  },
}));
const ProductCardImg = styled('div')({
  position: 'relative',
  paddingBottom: '100%',
  '& img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
const ProductCard = () => {
  return (
    <StyledCard variant="outlined">
      <ProductCardImg>
        <img src={foodSampleImg} alt="" />
      </ProductCardImg>
      <CardContent>
        <Typography
          variant="body2"
          color="textPrimary"
          className="line-clamp--2"
          fontWeight="600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          quo molestias impedit quos repellendus obcaecati, saepe, officia illo
          ducimus unde suscipit porro praesentium. Eaque excepturi inventore
          aspernatur enim nisi ea?
        </Typography>
        <Typography noWrap fontWeight="bold">
          Còn lại: 86
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography noWrap fontWeight="bold">
            68.000 <span style={{ textDecoration: 'underline' }}>đ</span>
          </Typography>
          <Tooltip arrow title="Thêm vào giỏ">
            <IconButton size="medium" color="primary">
              <AddShoppingCart fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
