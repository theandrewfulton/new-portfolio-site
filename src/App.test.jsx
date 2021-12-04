import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

test('renders header text inside App', () => {
  render(<App />)
  const headerText = screen.getByText('Andrew Fulton')
  expect(headerText).toBeInTheDocument()
})

// Function for testing Navigation items
const navTest = (navItem, component) => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  // Find and click nav item link
  userEvent.click(screen.getByText(navItem))
  // expect component to be in the document
  expect(screen.getByText(component)).toBeInTheDocument()
}

// render Home
test('Navigate to Home, About and back to Home', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  // Find and click About link
  userEvent.click(screen.getByText('About'))
  // expect component to be in the document
  expect(screen.getByText('This is the About component')).toBeInTheDocument()
  // find and click on Home link
  userEvent.click(screen.getByText('Home'))
  expect(screen.getByText('This is the Home component')).toBeInTheDocument()
})

// render About
test('Navigate to About component', () => {
  navTest('About','This is the About component')
})

// render Projects
test('Navigate to Projects component', () => {
  navTest('Projects','This is the Projects component')
})

// Articles points to medium?
test('Navigate to articles on Medium', () => {
  render(
      <App />
  )
  const articlesLink = screen.getByText('Articles')
  expect(articlesLink).toHaveAttribute('href', 'https://theandrewfulton.medium.com')
})

// render contact
test('Navigate to Contact component', () => {
  navTest('Contact','This is the Contact component')
})