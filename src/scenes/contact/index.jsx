import {useState, useRef} from 'react'
import styled from "styled-components"
import emailjs from 'emailjs-com'

const TransparencySection = styled.section`
background: radial-gradient(100% 241.89% at 100% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;
margin: 30px 5%;
// width: 90vw;
padding: 5px 50px 50px 50px;
`

const StyledIcon = styled.article `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: auto;
    padding: 20px;
`


const ContactForm = () => {
    // set state for Loading notice
    const [loading,setLoading] = useState(false)
    // set state for messages about form submission (error,)
    const [formResponse, setformResponse] = useState('')
    // set state for form inputs
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')

    // useRef for emailJS
    const form = useRef();

    const successMessage = () => {
        return (
            <p>🐦<em>*pigeon noises*</em> Hooray! Your message was sent and I'll get back to you soon.</p>
        )
    }

    const errorMessage = () => {
        return (
            <p>Urp, it looks like my form is broken. Please contact me at <a href="mailto:hello@theandrewfulton.com">hello@theandrewfulton.com</a></p>
        )
    }
    
    // behaviour on submit
    const handleSubmit = (event) => {
        // don't reload page on submit
      event.preventDefault()
        //reset any success or error messages
        setformResponse("")
        // show loading
        setLoading(true)
        // send form to emailJS
        emailjs.sendForm('service_bx8cte4', 'contact_form', form.current, 'user_GMUXb7E2zjpQqVnWACFKQ')
        // if successful
        .then((result) => {
            console.log(result.text)
            // stop loading
            setLoading(false)
            // show success message
            setformResponse(successMessage())
            // reset form values 
            setFirstName('')
            setLastName('')
            setEmail('')
            setSubject('')
            setMessage('')
            // if not successful
        }, (error) => {
            // console.log(error.text)
            setLoading(false)
            setformResponse(errorMessage)
        })
        // clear form fields
        //display confirmation message
    }
    return (
        // loading notification
        
        <>
        <div>
        {formResponse}
        {loading && <p>Sending...</p>}
        </div>
        <form ref={form} onSubmit={handleSubmit}>
        {/* Copied from Wireframe, I don't like it */}
        <p>Contact Form</p>
    {/* First Name */}
    <label>
        First Name:
        {/* <input value={firstName} onChange={setFirstName} name="first_name"></input> */}
        <input value={firstName} onChange={(event) => setFirstName(event.target.value)} name="first_name"></input>
    </label><br/>
    
    {/* Last Name */}
    <label>
        Last Name:
        {/* <input value={lastName} onChange={setLastName} name="last_name"></input> */}
        <input value={lastName} onChange={(event) => setLastName(event.target.value)} name="last_name"></input>
    </label><br/>

    {/* email address */}
    <label>
        email:
        {/* <input type="email" value={email} onChange={setEmail} name="reply_to"></input> */}
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="reply_to"></input>
    </label><br/>
    {/* subject? */}
    <label>
        Subject:
        {/* <input value={subject} onChange={setSubject} name="subject"></input> */}
        <input value={subject} onChange={(event) => setSubject(event.target.value)} name="subject"></input>
    </label><br/>
    {/* message */}
    <label>
        Message:
        {/* <textarea value={message} onChange={setMessage} name="message"/> */}
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message"/>
    </label><br/>
    {/* captcha? */}
    {/* submit */}
    <input type="submit" value="Submit" />
    </form>
    </>
    )
}

export const Contact = () => {
    
    return (
        <TransparencySection>
            <h1>Contact Me</h1>
            <StyledIcon>
                <p>This is the Contact component</p>
                <ContactForm/>               
            </StyledIcon>
        </TransparencySection>
    )
}