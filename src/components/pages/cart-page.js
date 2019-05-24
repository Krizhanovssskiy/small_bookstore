import React from 'react';
import { Link } from 'react-router-dom';
import ShopingCartTable from "../shoping-cart-table";


const CartPage = () => {
  return (
    <Link to='/cart'>
      <ShopingCartTable />
    </Link>)
};

export default CartPage;