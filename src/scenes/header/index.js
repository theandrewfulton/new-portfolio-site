import styled from "styled-components"
import { NavBar } from "../nav"

// Same style as footer, consider making a component
const HeaderStyle = styled.header`
background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px rgba(255, 255, 255, 0.5);
border-style: solid none;
backdrop-filter: blur(10px);
/* clearfix hack to align right and stay in bounds */
::after {
    content: "";
    clear: both;
    display: table;
}

/* remove bullet point format from unordered list */
/* ul {
    list-style-type: none;
} */
`

export const Header = () => {

    return (
        <HeaderStyle>
            <p>Andrew Fulton</p>
            <NavBar/>

        </HeaderStyle>
    )
}

  