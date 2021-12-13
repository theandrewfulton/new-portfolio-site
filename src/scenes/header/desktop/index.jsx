import styled from "styled-components"
import { NavContent } from "../../nav"

// Same style as footer, consider making a component
const DesktopHeaderStyle = styled.header`
background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px rgba(255, 255, 255, 0.5);
border-style: solid none;
backdrop-filter: blur(10px);

/* Things that are different */
margin-top: 30px;
display: flex;
justify-content: space-between;
position: -webkit-sticky; /* Safari */
// need to detect transparancy support for position:sticky to be effective
position: sticky;
top: 0;
z-index:1000;
p {
    margin-left: 10%;
    font-family: 'Caveat', cursive;
    font-size: 48px;
}
`

// StyledIcon is copied from Social. Consider making a component
// changed to .nav here
const StyledIcon = styled.nav `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    /* margin: 10px; */
    margin: 10px 80px 10px 10px;
    /* padding: 5px; */

    /* the following are changed from Social */
    /* fit content seemingly not required when floated right */
       /* width: fit-content; */
    padding: 20px;
    a {
    margin: 20px;
    :hover {
        text-decoration: underline;
    }
    }
`

export const DesktopHeader = () => {
    return (
        <DesktopHeaderStyle>
            <p>Andrew Fulton</p>
            <StyledIcon>
                <NavContent/>
            </StyledIcon>
        </DesktopHeaderStyle>
    )
}

