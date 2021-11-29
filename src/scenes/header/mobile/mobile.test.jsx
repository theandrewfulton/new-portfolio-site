import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter as Router} from 'react-router-dom'
import { MobileHeader } from '.'

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
    render(
        <Router>
        <MobileHeader/>
        </Router>
    )
    const mobileHeaderButton = screen.getByRole('button')
    userEvent.click(mobileHeaderButton)
    const clickedNav = screen.getByRole('navigation')
    expect(clickedNav).toBeInTheDocument()
})
// todo render only when screen size < 950px