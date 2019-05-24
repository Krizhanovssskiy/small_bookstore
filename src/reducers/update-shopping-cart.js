const updateOrder = ( state, id, quantity ) => {
  const {bookList: { books }, shoppingCart: { cartItems, orderTotal, orderCount }} = state;
  const book = books.find((item) => item.id === id);
  const indexBook = cartItems.findIndex((item) => item.id === id);
  const itemBook = cartItems[indexBook];
  const newItem = updateCartItem(book, itemBook, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, indexBook),
    orderTotal: orderTotal + quantity * book.price,
    orderCount: orderCount + quantity
  };
};

const updateCartItems = (cartItems, item, inx ) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, inx),
      ...cartItems.slice(inx + 1),
    ]
  }

  if (inx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, inx),
    item,
    ...cartItems.slice(inx + 1),
  ]
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    total = 0,
    count = 0
  } = item;

  return {
    id,
    title,
    total: total + quantity * book.price,
    count: count + quantity
  }
};

const updateShoppingCart = (state, actions) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderCount: 0
    }
  }

  switch (actions.type) {
    case 'ADDED_BOOK_TO_CART':
      return updateOrder(state, actions.payload, 1);
    case 'DECREASE_BOOK_FROM_CART':
      return updateOrder(state, actions.payload, -1);
    case 'DELETE_BOOK_FROM_CART':
      const item = state.shoppingCart.cartItems.find((item) => actions.payload === item.id);
      return updateOrder(state, actions.payload, -item.count);

    default :
      return state.shoppingCart;
  }
};

export default updateShoppingCart;