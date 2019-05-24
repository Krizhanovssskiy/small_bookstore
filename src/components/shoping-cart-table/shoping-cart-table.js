import React from 'react';
import { connect } from 'react-redux';
import { deletBookFromCart, bookAddedToCart, decreaseBookFromCart } from '../../actions';

import './shoping-cart-table.css';


const ShopingCartTable = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={()=>{onDecrease(id)}}
            className='btn btn-outline-warning'
          >
            <i className='fa fa-minus-circle' />
          </button>
          <button
            onClick={()=>{onIncrease(id)}}
            className='btn btn-outline-success'
          >
            <i className='fa fa-plus-circle' />
          </button>
          <button
            onClick={()=>{onDelete(id)}}
            className='btn btn-outline-danger'
          >
            <i className='fa fa-trash-o' />
          </button>
        </td>
      </tr>
    )
  };

  return (
    <div className='shoping-cart-table'>
      <h2>Your Order</h2>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>

          { items.map(renderRow) }

        </tbody>
      </table>
      <div className='total'>
          Total: $ {orderTotal}
      </div>
    </div>

  )
};

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    orderTotal: orderTotal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(bookAddedToCart(id)),
    onDecrease: (id) => dispatch(decreaseBookFromCart(id)),
    onDelete: (id) => dispatch(deletBookFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);



