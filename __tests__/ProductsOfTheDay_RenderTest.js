import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducers'; // Assuming you have a root reducer defined
import ProductsOfTheDay from '../src/components/ProductsOfTheDay';

test('renders ProductsOfTheDay component without errors', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <ProductsOfTheDay />
    </Provider>
  );
});
