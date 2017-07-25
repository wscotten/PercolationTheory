import Reactotron from 'reactotron-react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import './ReactotronConfig';
import Index from './app/';
import reducers from './app/reducers';

const middleware = [createLogger()];
const enhancers = compose(applyMiddleware(...middleware));

export const store = Reactotron.createStore(
  reducers,
  enhancers,
);

export default function Main() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
