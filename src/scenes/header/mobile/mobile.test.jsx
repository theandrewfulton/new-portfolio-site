import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter as Router} from 'react-router-dom'
import { MobileHeader } from '.'

// open Mobile Nav component common to several tests
const openMobileNav = () => {
    render(
        // render router to avoid issue of rendering navlinks outside of router
        <Router>
        <MobileHeader/>
        </Router>
    )
    // locate mobile header button
    const mobileHeaderButton = screen.getByRole('button')
    // click mobile header button
    userEvent.click(mobileHeaderButton)
    const clickedNav = screen.getByRole('navigation')
    expect(clickedNav).toBeInTheDocument()
}

test('renders the Mobile Header component', () => {  
    render (<MobileHeader/>)
    const mobileHeaderButton = screen.getByRole('button')
    expect(mobileHeaderButton).toBeInTheDocument()
});


test('does not render the Mobile navigation', () => {
    render(<MobileHeader/>)
    const unclickedNav = screen.queryByRole('navigation')
    expect(unclickedNav).toBeNull()
})

test('renders the Mobile navigation on click', () => {
    openMobileNav()
})

test('Mobile navigation closes when x is clicked', () => {
   openMobileNav()
    // locate exit button
    const exitButton = screen.getByText('X')
    // click exit button
    userEvent.click(exitButton)
    // locate nav
    const closedNav = screen.queryByRole('navigation')
    // expect nav to not be found as modal has been closed
    expect(closedNav).toBeNull()
})

test('Mobile navigation closes when Close Menu button is clicked', () => {
    openMobileNav()
    // locate the Close Menu button
    const closeMenu = screen.getByText('Close Menu')
    // click closeMenu button
    userEvent.click(closeMenu)
    // locate nav
    const closedNav = screen.queryByRole('navigation')
    // expect nav to not be found as modal has been closed
    expect(closedNav).toBeNull()
})
// todo render only when screen size < 950px
// todo logic for testing firefox detection?