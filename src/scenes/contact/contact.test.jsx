import { render, screen } from '@testing-library/react'
// is this needed? seems to work without in all my other tests
import "@testing-library/jest-dom"
import { Contact } from '.'
import { ContactObject } from './contactCopy'

test('Render the Contact component', () => {
    render(<Contact/>)
    const contactText = screen.getByTestId('contact-copy')
    expect(contactText).toBeInTheDocument()
})

    test('Render the First Name field', () => {
        render(<Contact />)
        const firstName = screen.getByRole('textbox', {name: "First Name:"})
        expect(firstName).toBeInTheDocument()
    })

    test('Render the Last Name field', () => {
        render(<Contact />)
        const lastName = screen.getByRole('textbox', {name: "Last Name:"})
        expect(lastName).toBeInTheDocument()
    })

    test('Render the email field', () => {
        render(<Contact />)
        const emailAddress = screen.getByRole('textbox', {name: "Email:"})
        expect(emailAddress).toBeInTheDocument()
    })
    test('Render the Subject field', () => {
        render(<Contact />)
        const subjectLine = screen.getByRole('textbox', {name: "Subject:"})
        expect(subjectLine).toBeInTheDocument()
    })
    test('Render the Message field', () => {
        render(<Contact />)
        const messageField = screen.getByRole('textbox', {name: "Message:"})
        expect(messageField).toBeInTheDocument()
    })
    test('Render the submit button', () => {
        render(<Contact />)
        const submitButton = screen.getByRole('button', {name: "Submit"})
        expect(submitButton).toBeInTheDocument()
    })

    // mock emailjs
    // form field validation