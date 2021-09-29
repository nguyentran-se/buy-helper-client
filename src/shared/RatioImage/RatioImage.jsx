import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  src: PropTypes.string.isRequired,
};

const ProductCardImg = styled('div')({
  position: 'relative',
  paddingBottom: '100%',
  '& img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

const RatioImage = ({ src, ...rest }) => {
  return (
    <ProductCardImg>
      <img src={src} {...rest} />
    </ProductCardImg>
  );
};
RatioImage.propTypes = propTypes;

export default RatioImage;
