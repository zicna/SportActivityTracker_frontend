import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// * react-redux is connecting react to redux
import { Provider } from 'react-redux'

import store from './redux/store'


// * in this file we will setup redux and store so all nested components will have access to the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

