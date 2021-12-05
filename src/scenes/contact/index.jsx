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



// custom useInput hook for DRYer code
function useInput(initialValue){
    const [value,setValue] = useState(initialValue)
     function handleChange(event){
         setValue(event.target.value)
        }
        return [value,handleChange]
 }

const ContactForm = () => {
    // set state for form inputs
    const [firstName,setFirstName] = useInput('')
    const [lastName,setLastName] = useInput('')
    const [email,setEmail] = useInput('')
    const [subject,setSubject] = useInput('')
    const [message,setMessage] = useInput('')

    // useRef for emailJS
    const form = useRef();
    
    // behaviour on submit
    const handleSubmit = (event) => {
        // don't reload page on submit
      event.preventDefault()
   
        console.log(firstName, lastName, email, subject, message)
        emailjs.sendForm('service_bx8cte4', 'contact_form', form.current, 'user_GMUXb7E2zjpQqVnWACFKQ')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        // clear form fields
        //display confirmation message
    }
    return (
        <form ref={form} onSubmit={handleSubmit}>
        {/* Copied from Wireframe, I don't like it */}
        <p>Contact Form</p>
    {/* First Name */}
    <label>
        First Name:
        <input value={firstName} onChange={setFirstName} name="first_name"></input>
    </label><br/>
    
    {/* Last Name */}
    <label>
        Last Name:
        <input value={lastName} onChange={setLastName} name="last_name"></input>
    </label><br/>

    {/* email address */}
    <label>
        email:
        <input type="email" value={email} onChange={setEmail} name="reply_to"></input>
    </label><br/>
    {/* subject? */}
    <label>
        Subject:
        <input value={subject} onChange={setSubject} name="subject"></input>
    </label><br/>
    {/* message */}
    <label>
        Message:
        <textarea value={message} onChange={setMessage} name="message"/>
    </label><br/>
    {/* captcha? */}
    {/* submit */}
    <input type="submit" value="Submit" />
    </form>
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