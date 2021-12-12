import {useState, useRef} from 'react'
import styled from "styled-components"
import emailjs from 'emailjs-com'

import { Social } from '../social'

// import page contents
import {ContactObject} from "./contactCopy"

const TransparencySection = styled.section`
background: radial-gradient(100% 241.89% at 100% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;
margin: 30px 5%;
// width: 90vw;
// padding: 5px 50px 50px 50px;
padding: 5px 5% 50px 5%
`

const StyledIcon = styled.article `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: auto;
    padding: 4%;
`

const FormStyling = styled.article`

p {
    text-align: center;
    margin-bottom: 50px;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

label {
    width: 100%;
    text-align: center;
}

// very similar to styled-icon. Need to investigate for DRY
input, textarea {
    margin: 10px 0 10px 0;

    color: white;
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    padding: 5px;

    :focus {
        background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    }
}

textarea {
    width: 80%;
    height: 150px;
}

// very similar to styled-icon. Need to investigate for DRY
input[type=submit] {
    :hover {
        background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    }
`

const ContactForm = ({description}) => {
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

    // message to display when form submitted
    const successMessage = () => {
        return (
            <p>🐦 <em>*pigeon noises*</em> Hooray! Your message was sent and I'll get back to you soon.</p>
        )
    }

    // message to display when there is an error
    const errorMessage = () => {
        return (
            <p>Urp, it looks like your internet dropped out or my form is broken. Please contact me at <a href="mailto:hello@theandrewfulton.com">hello@andrew-fulton.com</a></p>
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
        emailjs.sendForm('service_bx8cte4', 'portfolio_contact_form', form.current, 'user_GMUXb7E2zjpQqVnWACFKQ')
        // if successful
        .then(() => {
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
            setLoading(false)
            setformResponse(errorMessage)
        })
    }

    return (
        <FormStyling>
            <p data-testid="contact-copy">{description}</p>
            <Social />
            {/* Form and loading notifications */}
            {formResponse}
            {loading && <p>Sending...</p>}
            {/* contact form */}
            <form ref={form} onSubmit={handleSubmit}>
                               
                {/* First Name */}
                <label>
                    First Name:
                    <br/>
                    <input
                        value={firstName}
                        onChange={
                            (event) => setFirstName(event.target.value)
                        }
                        name="first_name"
                        required={true}
                        maxLength="50"
                    />
                </label><br/>
                
                {/* Last Name */}
                <label>
                    Last Name:
                    <br/>
                    <input
                        value={lastName}
                        onChange={
                            (event) => setLastName(event.target.value)
                        }
                        name="last_name"
                        required={true}
                        maxLength="50"
                    />
                </label><br/>

                {/* email address */}
                <label>
                    email:
                    <br/>
                        <input
                        type="email"
                        value={email}
                        onChange={
                            (event) => setEmail(event.target.value)
                        }
                        name="reply_to"
                        required={true}
                        maxLength="75"
                    />
                </label><br/>

                {/* subject */}
                <label>
                    Subject:
                    <br/>
                        <input
                        value={subject}
                        onChange={
                            (event) => setSubject(event.target.value)
                        }
                        name="subject"
                        required={true}
                        maxLength = "100"
                    />
                </label><br/>
                
                {/* message */}
                <label>
                    Message:
                    <br/>
                    <textarea
                        value={message}
                        onChange={
                            (event) => setMessage(event.target.value)
                        }
                        name="message"
                        required={true}
                        maxLength = "5000"
                    />
                </label><br/>

                {/* captcha? */}

                {/* submit */}
                
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </FormStyling>
    )
}

export const Contact = () => {
    
    return (
        <TransparencySection>
            <h1>Contact Me</h1>
            <StyledIcon>
                <ContactForm {...ContactObject}/>               
            </StyledIcon>
        </TransparencySection>
    )
}