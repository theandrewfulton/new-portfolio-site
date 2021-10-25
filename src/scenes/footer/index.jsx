import styled from "styled-components"


const StyledFooter = styled.footer`
background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
text-align: center;
font-size: 10px;
/* width: 100vw; */
height: 20px;
position:absolute;
left:0;
bottom:0;
right:0;
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