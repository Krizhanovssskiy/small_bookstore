import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.css';

const Header = ({numItems, total}) => {

  return(
    <header className='shop-header row'>
      <Link
        className='logo text-dark'
        to='/'
      >
        ReStore
      </Link>
      <Link
        className='shoping-cart'
        to='/cart'
      >
        <i className='cart-icon fa fa-shopping-cart' />
        {numItems} items (${total})
      </Link>
    </header>
  )
};

const mapStateToProps = ({shoppingCart: { orderTotal, orderCount }}) => {
  return {
    total: orderTotal,
    numItems: orderCount
  }
};

export default connect(mapStateToProps)(Header);