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
p {
    margin-left: 10%;
    font-family: 'Caveat', cursive;
    font-size: 48px;
}

/* remove bullet point format from unordered list */
/* ul {
    list-style-type: none;
} */
`

// StyledIcon is copied from Social. Consider making a component
const StyledIcon = styled.article `
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
    }
`
// Styled links is a way of not modifying StyledIcon
// const StyledLinks = styled.a `

    /* text-align: right; */
    
// `

// pop up hamburger menu using reactjs-popup
// const Modal = () => (  <Popup trigger={MobileHeaderIcon} modal>    <span> <MobileNavBar/> </span>  </Popup>);

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
