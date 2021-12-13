import styled from "styled-components"
import { NavContent } from "../../nav"
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom"

const MobileHeaderStyle = styled.button`
    background: radial-gradient(100% 100% at 48.65% 0%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    border: 0.1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    width: fit-content;
    padding: 20px;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    margin-left: 5px;
    margin-top: 1px;
    cursor: pointer;
    /* icon appears at top but stays in top of viewport on scroll */
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index:1000;
    :hover {
        background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    }
`

const MobileNavStyle = styled.nav `
    display:flex;
    flex-direction: column;
    text-align: center;
    border: 0.1px solid #FFFFFF;
    border-radius: 10px;
    /* red highlight gradient converted from rgba to hex */
    background: radial-gradient(100% 100% at 49.55% 100%, #660000 0%, #330000 100%);
    /* logic to switch to a more transparent and use backdrop-filter:blur on supported browsers */
    @supports ((-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px))) {
        background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px); 
    }
    a {
        margin: 10px 30px;
        padding: 20px;
        border: 0.1px solid #FFFFFF;
        border-radius: 10px;
        /* hover not fabulously helpful on mobile but still good for unmaximised browsers */
        :hover {
            background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
        }
    }
    // Styling for Close Menu button inside Nav
    .closemenubutton {
        background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
        :hover{
            background-color: #110026;
        }
    }
    /* revisit background blur issue for xbutton */
    .xbutton {
        background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
        border: 0.5px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(40px);
        border-radius: 10px;
        margin: 0;
        position: absolute;
        display: block;
        right: -10px;
        top: -32px;
        font-size: 20px;
        cursor: pointer;
        height: 25px;
        display: flex;
        padding: 0px 10px;
        align-items: center;
        :hover {
            background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
        }
    }
`
// custom hamburger menu using reactjs-popup
export const MobileHeader = () => {
    return (
      <Popup
            trigger={<MobileHeaderStyle>AF</MobileHeaderStyle>}
            modal
            nested
        >
        {close => (
            <>
                <MobileNavStyle>
                <button className="xbutton" onClick={close}>
                    X
                </button>
                    <NavContent/>
                    <Link className="closemenubutton" to=""
                            onClick={() => {
                                close();
                            }}
                        >
                        Close Menu
                        </Link>
                </MobileNavStyle>
            </>
                )}
        </Popup>
    )
}; 