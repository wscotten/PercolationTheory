import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './app/';
import reducers from './app/reducers';

export const store = createStore(reducers);

export default function Main() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
