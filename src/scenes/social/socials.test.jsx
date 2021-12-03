import { render, screen } from '@testing-library/react';
import { Social } from '.'

// render socials

test('Socials component renders', () => {
    render(<Social />)
    const socialElement = screen.getByTestId('social-element');
    expect(socialElement).toBeInTheDocument();
})
// test links?