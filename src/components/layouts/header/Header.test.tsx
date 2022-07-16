import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders title', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/Where in the world/i);
  expect(linkElement).toBeInTheDocument();
});
