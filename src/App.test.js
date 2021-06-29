import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/PROBANDO HOOKS/i);
  expect(linkElement).toBeInTheDocument();
});
