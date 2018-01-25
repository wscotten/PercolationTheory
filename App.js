import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
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

export const store = createStore(
  reducers,
  devToolsEnhancer(),
  applyMiddleware(...middlewares),
);

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
