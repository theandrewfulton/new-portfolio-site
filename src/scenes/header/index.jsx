import styled from "styled-components"
import { DesktopNavBar, MobileNavBar } from "../nav"
import Popup from 'reactjs-popup';
// import { Modal } from "./modal"

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

// styled article or something else?
const MobileNavStyle = styled.article `
    display:flex;
    flex-direction: column;
    text-align: center;
    background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    border: 0.1px solid #FFFFFF;
    /* issues with blur in firefox */
    /* if detected browser is firefox then add a new element behind mobile hamburger menu? */
    backdrop-filter: blur(5px);
    border-radius: 10px;
    a, p {
        margin: 10px 30px;
        padding: 20px;
        border: 0.1px solid #FFFFFF;
    }
`

// pop up hamburger menu using reactjs-popup
// const Modal = () => (  <Popup trigger={MobileHeaderIcon} modal>    <span> <MobileNavBar/> </span>  </Popup>);

// custom hamburger menu using reactjs-popup
const Modal = () => {
    return (
      <Popup
          trigger={MobileHeaderIcon}
            modal
            nested
        >
        {close => (
            <MobileNavStyle>
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="content">
                    <MobileNavBar/>
                    <p
                        onClick={() => {
                            close();
                        }}
                    >
                    close modal
                    </p>
                </div>
            </MobileNavStyle>
                )}
        </Popup>
    )
};

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

  