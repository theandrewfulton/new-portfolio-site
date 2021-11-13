import { Link } from "react-router-dom"
import styled from "styled-components"

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
    

export const NavBar = () => {

    return (
            <StyledIcon>
                {/* <StyledLinks> */}
                {/* <ul> */}
                    {/* <li> */}
                        <Link to="/">Home</Link>
                    {/* </li> */}
                    {/* <li> */}
                        <Link to="/about">About</Link>
                    {/* </li> */}
                    {/* <li> */}
                        <Link to="/projects">Projects</Link>
                    {/* </li> */}
                    {/* <li> */}
                    <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">Articles</a>
                    {/* </li> */}
                    {/* <li> */}
                        <Link to="/contact">Contact</Link>
                    {/* </li> */}
                {/* </ul> */}
                {/* </StyledLinks> */}
            </StyledIcon>
    )
}

  