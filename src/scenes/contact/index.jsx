import styled from "styled-components"

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

export const Contact = () => {
    return (
        <TransparencySection>
            <h1>Contact Me</h1>
            <StyledIcon>
                <p>This is the Contact component</p>
                
                <form>
                    {/* Copied from Wireframe, I don't like it */}
                    <p>Contact Form</p>
                {/* First Name */}
                <label>
                    First Name:
                    <input type="text"></input>
                </label><br/>
                
                {/* Last Name */}
                <label>
                    Last Name:
                    <input type="text"></input>
                </label><br/>

                {/* email address */}
                <label>
                    email:
                    <input type="email"></input>
                </label><br/>
                {/* subject? */}
                <label>
                    Subject:
                    <input type="text"></input>
                </label><br/>
                {/* message */}
                <label>
                    Message:
                    <textarea/>
                </label><br/>
                {/* captcha? */}
                {/* submit */}
                <input type="submit" value="Submit" />
                </form>
            </StyledIcon>
        </TransparencySection>
    )
}