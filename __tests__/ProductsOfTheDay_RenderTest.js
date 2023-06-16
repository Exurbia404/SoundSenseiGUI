import { render } from '@testing-library/react';
import ProductsOfTheDay from '../src/components/ProductsOfTheDay.js';

test('renders ProductsOfTheDay component without errors', () => {
  render(<ProductsOfTheDay />);
});
