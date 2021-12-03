import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders header text inside App', () => {
  render(<App />)
  const headerText = screen.getByText('Andrew Fulton')
  expect(headerText).toBeInTheDocument()
})

// render Home
// test('home component renders when navlink is clicked', () => {
//  render(<App />)
//  const homeLink = screen.getByText('Home')
//     // click mobile header button
//     userEvent.click(homeLink)
//   const homeComponent = screen.getByTestId('home-component')
//   // expect(homeComponent).toBeInTheDocument()
//  screen.debug()
// })


// render About

// test('About component renders when navlink is clicked', () => {
//   render(<App />)
//   const aboutLink = screen.getByText('About')
//      // click mobile header button
//      userEvent.click(aboutLink)
//    const aboutComponent = screen.getByTestId('about-component')
//    expect(homeComponent).toBeInTheDocument()
//   // screen.debug()
//  })
// render Projects
// Articles points to medium?
// render contact