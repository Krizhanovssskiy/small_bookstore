import React from 'react';
import './error-indicator.css';
import icons from './icon-error.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icons} alt="error icons"/>
      <h2>Error!</h2>
      <p>Our specialists have already begun to solve it!</p>
    </div>
  )
};

export default ErrorIndicator;