import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text inside App', () => {
  render(<App />);
  const headerText = screen.getByText('Andrew Fulton');
  expect(headerText).toBeInTheDocument();
});
