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
        margin: 30px;
    }
`

// Add new component for firefox compatibility. Still need to add logic for this
const MobileFirefoxLayer = styled.article `
 background: linear-gradient(180deg, #200833 0%, #110026 100%);
 border-radius: 10px;

`


// Styled links is a way of not modifying StyledIcon
// const StyledLinks = styled.a `

    /* text-align: right; */
    
// `

const NavContent = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">Articles</a>
            <Link to="/contact">Contact</Link>
        </>
    )
}

export const DesktopNavBar = () => {

    return (
            <StyledIcon>
                <NavContent/>
            </StyledIcon>
    )
}

export const MobileNavBar = () => {
    return (
        <MobileFirefoxLayer>
        <MobileNavStyle>
            Exit Button
            <NavContent/>
        </MobileNavStyle>
        </MobileFirefoxLayer>
    )
}

  