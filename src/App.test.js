import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math magicians app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
