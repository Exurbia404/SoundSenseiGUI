import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductsOfTheDay from '../src/components/ProductsOfTheDay.js';

const mockStore = configureStore([]);
const store = mockStore({
  productsReducer: {
    products: [{ id: 1, name: 'Product 1', description: 'Description 1', productImageLink: 'image-1.jpg' }],
    loading: false,
  },
});

test('displays products after successful API call', async () => {
  render(
    <Provider store={store}>
      <ProductsOfTheDay />
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByAltText('Product 1')).toBeInTheDocument();
  });
});
