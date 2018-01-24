import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from '/app/index';
import reducers from '/app/reducers';
import {
  startButtonMiddleware,
  boxesMiddleware,
  rowsAndColumnsMiddleware,
} from '/app/middleware';

const middlewares = [
  startButtonMiddleware,
  boxesMiddleware,
  rowsAndColumnsMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  // middlewares.push(logger);
}

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
);

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
