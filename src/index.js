import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// * react-redux is connecting react to redux
import { Provider } from 'react-redux'

import store from './store.js'


// * in this file we will setup redux and store so all nested components will have access to the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
