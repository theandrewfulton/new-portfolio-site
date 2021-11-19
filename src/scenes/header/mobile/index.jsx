import styled from "styled-components"
import { NavContent } from "../../nav"
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom"

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
    a {
        margin: 10px 30px;
        padding: 20px;
        border: 0.1px solid #FFFFFF;
        border-radius: 10px;
        :hover {
            background-color: #110026;
        }
    }
    // Styling for Close Menu button inside Nav
    .closemenubutton {
        background-color: #110026;
    }
`
// mobile header icon styling
const MobileHeaderIcon = () => {
    return (
        <MobileHeader>
            <p>AF</p>
        </MobileHeader>
    )
}

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

// Add new component for firefox compatibility. Still need to add logic for this
const MobileFirefoxLayer = styled.article `
 background: linear-gradient(180deg, #200833 0%, #110026 100%);
 border-radius: 10px;

`

// pop up hamburger menu using reactjs-popup
// const Modal = () => (  <Popup trigger={MobileHeaderIcon} modal>    <span> <MobileNavBar/> </span>  </Popup>);

// custom hamburger menu using reactjs-popup
export const Modal = () => {
    return (
      <Popup
          trigger={MobileHeaderIcon}
            modal
            nested
        >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                {/* styled icon for close button? */}
                <MobileFirefoxLayer>
                    <MobileNavStyle>
                        <Link className="closemenubutton" to=""
                                onClick={() => {
                                    close();
                                }}
                            >
                            Close Menu
                            </Link>
                        <NavContent/>
                    </MobileNavStyle>
                </MobileFirefoxLayer>
            </div>
                )}
        </Popup>
    )
}; 