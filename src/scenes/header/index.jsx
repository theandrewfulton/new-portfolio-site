import styled from "styled-components"
import { DesktopNavBar, MobileNavBar } from "../nav"
import Popup from 'reactjs-popup';

// Same style as footer, consider making a component
const DesktopHeader = styled.header`
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

const MobileHeader = styled.header`
    background: radial-gradient(100% 100% at 48.65% 0%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    border: 0.1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    width: fit-content;
    padding: 10px;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    margin-left: 5px;
    margin-top: 1px;
`
// mobile header icon styling
const MobileHeaderIcon = () => {
    return (
        <MobileHeader>
            <p>AF</p>
        </MobileHeader>
    )
}

// pop up hamburger menu using reactjs-popup
const Modal = () => (  <Popup trigger={MobileHeaderIcon} modal>    <span> <MobileNavBar/> </span>  </Popup>);

export const Header = () => {

    return (
        <>
            <Modal/>
            <DesktopHeader>
                <p>Andrew Fulton</p>
                <DesktopNavBar/>
            </DesktopHeader>
        </>
    )
}

  