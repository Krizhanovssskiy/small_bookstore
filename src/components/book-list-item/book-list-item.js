import React from 'react';


import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { titel, author, price, coverImg } = book;
  return (
    <div className='book-list-item'>
      <div className='book-cover'>
        <img src={coverImg} alt="book-img"/>
      </div>
      <div className='book-details'>
        <p className='book-title'>
          {titel}
        </p>
        <div className='book-author'>{author}</div>
        <div className='book-price'>{price} $</div>
        <button
          onClick={onAddedToCart}
          className='btn btn-info btn-sm add-to-cart'
        >
          Add to cart
        </button>
      </div>

    </div>
  )
};

export default BookListItem;