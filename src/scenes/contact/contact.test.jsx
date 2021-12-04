import { render, screen } from '@testing-library/react';
import { Contact } from '.'

test('Render the home component', () => {
    render(<Contact/>)
    const contactText = screen.getByText('This is the Contact component')
    expect(contactText).toBeInTheDocument()
})