import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Index from './app/';
import reducers from './app/reducers';


import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';


const middleware = [
  createLogger(),
];

const enhancers = compose(
  applyMiddleware(...middleware)
);

export const store = Reactotron.createStore( // error happens here, createStore is undefined (?)
  reducers,
  enhancers,
);


// export const store = createStore(reducers);
Reactotron.log('hello rendering world');

export default function Main() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
