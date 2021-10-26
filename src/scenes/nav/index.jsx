import { Link } from "react-router-dom"
import styled from "styled-components"


const MyNav = styled.nav`
color: red;
`

export const NavBar = () => {

    return (
        <MyNav>
            <p>This is the Nav Bar</p>
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
        </MyNav>
    )
}

  