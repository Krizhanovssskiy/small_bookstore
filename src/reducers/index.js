import updateBookList from './update-book-list';
import updateShoppingCart from './update-shopping-cart'

const reducers = (state, actions) => {
  return {
    bookList: updateBookList(state, actions),
    shoppingCart: updateShoppingCart(state, actions)
  }
};

export default reducers;