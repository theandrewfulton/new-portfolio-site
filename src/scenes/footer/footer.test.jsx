import { render, screen } from '@testing-library/react';
import { Footer } from '.'

test('renders text inside Footer component', () => {
  render(<Footer />);
  const footerText = screen.getByText('Copyright © 2021 Andrew Fulton');
  expect(footerText).toBeInTheDocument();
});