import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreServices } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions';
import { Compose } from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks()


  }

  render () {
    const { books, loading, error, onAddedToCart } = this.props;

    if (error) {
      return <ErrorIndicator />
    }
    if (loading) {
      return <Spinner />
    }
    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem
                  book={book}
                  onAddedToCart={() => onAddedToCart(book.id) }/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {
    books: books,
    loading: loading,
    error: error
  }
};

const mapDispatchToProps = (dispatch, {bookstoreServices}) => {
  return {
    fetchBooks: fetchBooks(bookstoreServices, dispatch),
    onAddedToCart: (id) => {
      dispatch(bookAddedToCart(id))
    }
  }
};

export default Compose(
  withBookstoreServices(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);