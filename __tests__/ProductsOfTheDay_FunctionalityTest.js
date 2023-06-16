import { render, screen } from '@testing-library/react';
import ProductsOfTheDay from 'src\components\ProductsOfTheDay.js';

test('displays different random products on each render', () => {
  render(<ProductsOfTheDay />);

  const productNames = screen.getAllByText(/Product \d/).map((element) => element.textContent);
  expect(productNames).toHaveLength(3);

  render(<ProductsOfTheDay />);

  const newProductNames = screen.getAllByText(/Product \d/).map((element) => element.textContent);
  expect(newProductNames).toHaveLength(3);
  expect(newProductNames).not.toEqual(productNames);
});
