import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders title', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Where in the world/i);
  expect(linkElement).toBeInTheDocument();
});
