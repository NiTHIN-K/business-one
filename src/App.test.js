import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the business coverage headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /provide better cell coverage/i })).toBeInTheDocument();
});
