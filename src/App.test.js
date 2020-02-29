import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Chat App/i);
  expect(linkElement).toBeInTheDocument();
});
