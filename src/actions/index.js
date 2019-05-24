
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksError = (err) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: err
  }
};

const bookAddedToCart = (itemId) => {
  return {
    type: 'ADDED_BOOK_TO_CART',
    payload: itemId
  }
};

const deletBookFromCart = (itemId) => {
  return {
    type: 'DELETE_BOOK_FROM_CART',
    payload: itemId
  }
};

const decreaseBookFromCart = (id) => {
  return {
    type: 'DECREASE_BOOK_FROM_CART',
    payload: id
  }
};

const fetchBooks = ( bookstoreServices, dispatch ) => () => {
  dispatch(booksRequested());
  bookstoreServices.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
};


export {
  fetchBooks,
  bookAddedToCart,
  deletBookFromCart,
  decreaseBookFromCart
}