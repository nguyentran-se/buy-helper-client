import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/buyhelper-logo.png';
import { styled } from '@mui/system';
import { PATH_NAME } from 'configs';
const WIDTH_LOGO = 120;
const HEIGHT_LOGO = 60;
const StyledLogo = styled(Link)({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: WIDTH_LOGO,
  height: HEIGHT_LOGO,
  overflow: 'hidden',
  userSelect: 'none',
  '& img': {
    position: 'absolute',
    left: -94,
    top: -20,
    width: 290,
    height: 110,
    objectFit: 'cover',
  },
});
const Logo = ({ hasHref = true }) => {
  return (
    <div style={{ width: WIDTH_LOGO, height: HEIGHT_LOGO, flexShrink: 0 }}>
      <StyledLogo to={hasHref ? PATH_NAME.CATEGORY_GENRE : '#'}>
        <img src={logo} alt="" />
      </StyledLogo>
    </div>
  );
};

export default Logo;
