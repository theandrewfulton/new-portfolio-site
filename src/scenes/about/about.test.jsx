import { render, screen } from '@testing-library/react';
import { About } from '.'

test('Render the About component', () => {
    render(<About/>)
    // const aboutText = screen.getByText('This is the About component')
    // expect(aboutText).toBeInTheDocument()
})