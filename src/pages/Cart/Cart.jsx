import React from 'react';
import CartIntro from '../../shared/CartIntro/CartIntro';
import CartProducts from './components/CartProducts';

const Cart = () => {
  return (
    <div className="buyhelper-cart">
      <CartIntro title={'GIỎ HÀNG'} />
      <CartProducts />
    </div>
  );
};

export default Cart;
