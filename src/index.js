import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Roeter} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import store from './store';
import BookstoreServices from './services/bookstore-services';
import { BookstoreServicesProvider } from './components/bookstore-service-context';
import App from './components/app';

const bookstoreServices = new BookstoreServices();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServicesProvider value={bookstoreServices}>
        <Roeter>
          <App />
        </Roeter>
      </BookstoreServicesProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);


