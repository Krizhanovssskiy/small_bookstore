import React from 'react';
import { BookstoreServicesConsumer } from '../bookstore-service-context';


const withBookstoreServices = () => (Wrapped) => {
  return (props) => {
    return  (
      <BookstoreServicesConsumer>
        {
          (bookstoreServices) => {
            return (
              <Wrapped {...props} bookstoreServices={bookstoreServices} />
            )
          }
        }
      </BookstoreServicesConsumer>

    )
  }
};

export default withBookstoreServices;