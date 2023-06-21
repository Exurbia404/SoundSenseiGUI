import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import Product from '../src/components/Product.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Product Component - Render Test', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('renders without throwing any errors', () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>
    );
    // If the component renders without throwing any errors, the test passes
  });
});
