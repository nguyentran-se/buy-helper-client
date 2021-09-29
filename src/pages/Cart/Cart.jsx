import React from 'react';
import CartIntro from './components/CartIntro';
import CartProducts from './components/CartProducts';

const Cart = () => {
  return (
    <div className="buyhelper-cart" style={{ paddingBottom: '50px' }}>
      <CartIntro />
      <CartProducts />
    </div>
  );
};

export default Cart;
