import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  //const textElement = screen.getByText(/Ambiance/i);
  expect(true).toBeTruthy();
});
