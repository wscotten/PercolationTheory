import Reactotron from 'reactotron-react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './ReactotronConfig';
import Index from '/app/';
import reducers from '/app/reducers';
import middleware from '/app/middleware';

export const store = Reactotron.createStore(
  reducers,
  applyMiddleware(
    createLogger(),
    middleware,
  ),
);

export default function Main() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
