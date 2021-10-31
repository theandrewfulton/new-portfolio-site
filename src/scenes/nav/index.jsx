import { Link } from "react-router-dom"
import styled from "styled-components"


const DesktopNav = styled.nav`
color: red;
background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
border: 0.5px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);

ul {
    list-style-type: none;
}
`
// StyledIcon is copied from Social. Consider making a component
const StyledIcon = styled.article `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    /* margin: 10px; */
    padding: 5px;
`
    

export const NavBar = () => {

    return (
        <DesktopNav>
            <p>This is the Nav Bar</p>
            <StyledIcon>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                    <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">Articles</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </StyledIcon>
        </DesktopNav>
    )
}

  