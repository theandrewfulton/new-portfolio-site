import { render, screen } from '@testing-library/react';
import { About } from '.'
import { AboutObject } from '../about/aboutCopy'

// this is identical to the nav tests
test('Render the About component', () => {
    render(<About/>)
    const aboutText = screen.getByRole('heading')
    expect(aboutText).toHaveTextContent('About Me')
})

// these tests may not be helpful, issues parsing text stored in the object between backticks
//  confirmed, tests are useless as still pass when object key is missing

test ('Render the Skills copy', () => {
    render(<About/>)
    const skillsColumn = screen.getByTestId('skills-copy')
    expect(skillsColumn).toBeInTheDocument()
})

test ('Render the Technology copy', () => {
    render(<About/>)
    const skillsColumn = screen.getByTestId('technology-copy')
    expect(skillsColumn).toBeInTheDocument()
})

test ('Render the Interests copy', () => {
    render(<About/>)
    const skillsColumn = screen.getByTestId('interests-copy')
    expect(skillsColumn).toBeInTheDocument()
})