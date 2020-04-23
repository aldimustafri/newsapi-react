/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-23 19:32:17
 * @modify date 2020-04-23 19:32:17
 * @desc [description]
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
