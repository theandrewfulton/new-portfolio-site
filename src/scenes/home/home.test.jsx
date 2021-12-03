import { render, screen } from '@testing-library/react';
import { Home } from '.'

test('Render the home component', () => {
    render(<Home/>)
    const homeText = screen.getByText('This is the Home component')
    expect(homeText).toBeInTheDocument()
})