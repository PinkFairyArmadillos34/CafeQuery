import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import styles from './styles.scss';


render(
//wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
  <App />
   </Provider>,
  document.getElementById('root')
);
