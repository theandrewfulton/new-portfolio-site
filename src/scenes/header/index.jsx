import styled from "styled-components"
import { NavBar } from "../nav"
import Popup from 'reactjs-popup';

// Same style as footer, consider making a component
const HeaderStyle = styled.header`
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

const Modal = () => (  <Popup trigger={<p>AF</p>} modal>    <span> <NavBar/> </span>  </Popup>);

export const Header = () => {

    return (
        <>
            <Modal/>
            <HeaderStyle>
                <p>Andrew Fulton</p>
                <NavBar/>
            </HeaderStyle>
        </>
    )
}

  