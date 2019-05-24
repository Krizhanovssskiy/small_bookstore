import React from 'react';
import BookList from '../book-list';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Link to='/'>
      <BookList />
    </Link>
  )
};

export default HomePage;