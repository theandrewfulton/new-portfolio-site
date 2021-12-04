import { render, screen } from '@testing-library/react';
import { Projects } from '.'

test('Render the Projects component', () => {
    render(<Projects/>)
    const projectsText = screen.getByText('This is the Projects component')
    expect(projectsText).toBeInTheDocument()
})