import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import { DesktopHeader } from '.'

test('renders the Desktop Header component', () => {  
    render (
        // render router to avoid issue of rendering navlinks outside of router
        <Router>
        <DesktopHeader/>
        </Router>
    )
  const desktopHeaderText = screen.getByText('Andrew Fulton')
  expect(desktopHeaderText).toBeInTheDocument()
});

test('renders the Desktop navigation', () => {
    render(
        <Router>
        <DesktopHeader/>
        </Router>
        )
    const desktopNav = screen.getByRole('navigation')
    expect(desktopNav).toBeInTheDocument()
})

// todo render only when screen size >= 950px
// todo logic for testing firefox detection?