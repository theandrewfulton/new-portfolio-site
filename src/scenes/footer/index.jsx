import styled from "styled-components"


const StyledFooter = styled.footer`
background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px rgba(255, 255, 255, 0.5);
border-style: solid none;
backdrop-filter: blur(10px);
text-align: center;
font-size: 10px;
margin-top: 30px;
height: 20px;
p {
    margin: 3px;
}
`

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright © {new Date().getFullYear()} Andrew Fulton</p>
        </StyledFooter>
    )
}